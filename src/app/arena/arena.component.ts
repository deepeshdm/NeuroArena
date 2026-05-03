import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../webservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Option {
  answerId: string;
  answerText: string;
  displayOrder: number;
  isSelected?: boolean;
  isCorrect?: boolean;   
  isWrong?: boolean; 
}

@Component({
  selector: 'app-arena',
  imports: [CommonModule, FormsModule],
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.scss']
})
export class ArenaComponent implements OnInit, OnDestroy {

  battleId: string = '';
  playerId: string = '';
  username: string = '';
  roomCode: string = '';
  gameCompleted: boolean = false;  // set to true when COMPLETED message received
  selectedAnswerId: string = '';

  currentQuestion: any = null;
  currentQuestionNumber: number = 0;
  totalQuestions: number = 10;
  questionText: string = '';
  options: Option[] = [];
  category: string = '';
  difficulty: string = '';

  timeLeft: number = 30;
  timerInterval: any = null;
  questionStartTime: number = 0;

  isLoading: boolean = true;
  hasAnswered: boolean = false;
  errorMessage: string = '';
  isSubmitting: boolean = false;
  pointsPossible: number = 0;

  leaderboard: any[] = [];
  floatingPoints: { id: number; value: number }[] = [];
  private floatingCounter = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService
  ) {}

  async ngOnInit() {

    // Push a dummy state so back button hits this first
    history.pushState(null, '', location.href);
    window.addEventListener('popstate', this.onPopState);

    const rawBattleId = localStorage.getItem('battleId') || '';
    const rawPlayerId = localStorage.getItem('playerId') || '';
    const rawRoomCode = localStorage.getItem('roomCode') || '';
    const rawUsername = localStorage.getItem('username') || '';

    if (!rawBattleId || !rawPlayerId) {
      console.error('No battle info found');
      this.router.navigate(['/']);
      return;
    }

    this.battleId = this.api.decrypt(rawBattleId);
    this.playerId = this.api.decrypt(rawPlayerId);
    this.roomCode = this.api.decrypt(rawRoomCode);
    this.username = this.api.decrypt(rawUsername);

    // Subscribe BEFORE requesting (important: set up listener first)
    this.api.onQuestion().subscribe((question: any) => {
      console.log('Received question payload:', question);
      this.displayQuestion(question);
    });

    // Add these subscriptions alongside onQuestion()
    this.api.onAnswerResult().subscribe((result: any) => {
        this.handleAnswerResult(result);
    });

    this.api.onLeaderboardUpdate().subscribe((data: any) => {
        this.updateLeaderboard(data.leaderboard);
    });

    this.api.onBattleStart().subscribe((data: any) => {
        if (data.type === 'BATTLE_COMPLETED') {
            this.gameCompleted = true;
            alert('Battle completed! Check your results.');
            this.router.navigate(['/result']);
        }
    });
  

    if (!this.api.isConnected()) {
      console.log('WS not connected, reconnecting...');
      try {
        await this.api.connectWebSocket(this.roomCode, this.username, this.playerId);
      } catch (err) {
        this.errorMessage = 'WebSocket connection failed. Please refresh.';
        this.isLoading = false;
        return;
      }
    }

    // FIX: Small delay to ensure STOMP subscriptions are registered
    // before we fire the request
    setTimeout(() => this.requestQuestion(), 300);
  }

  requestQuestion() {
    if (this.api.isConnected()) {
      this.api.requestCurrentQuestion(this.battleId, this.playerId);
      console.log('Requested question for battle:', this.battleId);
    } else {
      this.errorMessage = 'WebSocket not connected. Please refresh.';
      this.isLoading = false;
    }
  }


  displayQuestion(question: any) {
    if (this.timerInterval) clearInterval(this.timerInterval);

    console.log('Displaying question:', question);
    this.hasAnswered           = false;
    this.pointsPossible = question.pointsPossible || 0;
    this.currentQuestion       = question;
    this.currentQuestionNumber = question.questionNumber;
    this.totalQuestions        = question.totalQuestions;
    this.questionText          = question.questionText;
    this.options               = (question.options || []).map((o: any) => ({ ...o, isSelected: false }));
    this.category              = question.category   || 'General';
    this.difficulty            = question.difficulty || 'Medium';
    this.isLoading             = false;
    this.errorMessage          = '';
    this.selectedAnswerId = '' // reset selected answer on new question

    // ── Restore time if same question after refresh, else reset ──
    const savedQuestionNumber = localStorage.getItem('currentQuestionNumber');
    const savedStartTime      = localStorage.getItem('questionStartTime');
    const timeLimit           = question.timeLimitSeconds || 30;

    if (savedQuestionNumber === String(question.questionNumber) && savedStartTime) {
        // Same question — calculate remaining time
        const elapsed = Math.floor((Date.now() - parseInt(savedStartTime)) / 1000);
        this.timeLeft = Math.max(0, timeLimit - elapsed);
        this.questionStartTime = parseInt(savedStartTime);
    } else {
        // New question — fresh timer
        this.timeLeft          = timeLimit;
        this.questionStartTime = Date.now();
        localStorage.setItem('questionStartTime',      String(this.questionStartTime));
        localStorage.setItem('currentQuestionNumber',  String(question.questionNumber));
    }

    this.startTimer();
}

  startTimer() {
    this.timerInterval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.timerInterval);
        if (!this.hasAnswered) this.autoSubmit();
      }
    }, 1000);
  }

  selectOption(answerId: string, index: number) {
      if (this.hasAnswered) return;
      // Just highlight the selection, don't submit yet
      this.options.forEach((opt, i) => opt.isSelected = i === index);
      this.selectedAnswerId = answerId;  // ← track selected answer
  }

  submitSelected() {
      if (!this.selectedAnswerId || this.hasAnswered) return;

      this.hasAnswered = true;
      this.isSubmitting = true;
      if (this.timerInterval) clearInterval(this.timerInterval);

      const responseTimeMs = Date.now() - this.questionStartTime;
      this.api.submitAnswer(
          this.battleId, this.playerId,
          this.currentQuestion.questionId,
          this.selectedAnswerId,
          responseTimeMs
      );
  }

  autoSubmit() {
    this.hasAnswered = true;
    const responseTimeMs = Date.now() - this.questionStartTime;
    console.log('Auto-submit - time expired for question', this.currentQuestionNumber);
    this.api.submitAnswer(
        this.battleId, this.playerId,
        this.currentQuestion.questionId,
        null,
        responseTimeMs
    );
  }

  handleAnswerResult(result: any) {
      // Highlight correct/wrong on the options
      this.options = this.options.map(opt => ({
          ...opt,
          isCorrect:  opt.answerId === result.correctAnswerId,
          isWrong:    opt.isSelected && !result.isCorrect
      }));

      if (result.isCorrect && result.pointsEarned) {
          this.showFloatingPoints(result.pointsEarned);
      }

      // Show score feedback, then auto-request next question after a delay
      setTimeout(() => {
        this.isSubmitting = false; 
        this.requestQuestion();
      }, 2000);
  }

  showFloatingPoints(points: number) {
      const id = this.floatingCounter++;
      this.floatingPoints.push({ id, value: points });
      setTimeout(() => {
          this.floatingPoints = this.floatingPoints.filter(p => p.id !== id);
      }, 1500); // remove after animation completes
  }

  updateLeaderboard(data: any[]) {
      this.leaderboard = data.map(p => ({
          ...p,
          isYou: p.playerId === this.playerId,
          ptsTo2nd: /* calculate gap */ 0
      }));
  }

  getOptionLetter(index: number): string {
    return String.fromCharCode(65 + index);
  }

  onPopState = () => {
    history.pushState(null, '', location.href);  // keep pushing to trap the back button
}

  ngOnDestroy() {
    window.removeEventListener('popstate', this.onPopState);
    if (this.timerInterval) clearInterval(this.timerInterval);
  }

  canLeave(): boolean {
        return this.gameCompleted;  // only allow leaving when game is done
  }
  
}