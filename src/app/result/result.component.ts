import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../webservice.service';
import { CommonModule } from '@angular/common';

interface CognitiveAttribute {
    name: string;
    value: number;
    color: string;
}

interface BattlePersona {
    name: string;
    description: string;
    topSkill: string;
    skillLevel: string;
    growthArea: string;
    growthValue: string;
}

interface FinalStanding {
    rank: number;
    username: string;
    score: number;
    isYou?: boolean;
}

@Component({
    selector: 'app-result',
    imports: [CommonModule],
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

    isLoading: boolean = true;
    aiAnalysis         = '';
    aiAnalysisFallback = false;
    aiLoading          = true;
    userWon:   boolean = false;

    finalRank:    number = 0;
    totalPlayers: number = 0;
    score:        number = 0;
    accuracy:     number = 0;
    avgSpeedSecs: number = 0;

    finalStandings:      FinalStanding[]      = [];
    cognitiveAttributes: CognitiveAttribute[] = [];
    battlePersona:       BattlePersona        = {} as BattlePersona;

    // Attribute icon map
    attrIcons: Record<string, string> = {
        LOGIC: '🔮', SPEED: '⚡', FOCUS: '🎯', EXECUTION: '🎯', MEMORY: '⚙️'
    };

    constructor(private api: ApiService, private router: Router) {}

    async ngOnInit() {
      const rawBattleId = localStorage.getItem('battleId') || '';
      const rawPlayerId = localStorage.getItem('playerId') || '';

      if (!rawBattleId || !rawPlayerId) { this.router.navigate(['/']); return; }

      const battleId = this.api.decrypt(rawBattleId);
      const playerId = this.api.decrypt(rawPlayerId);

      try {
          const data = await this.api.getResult(battleId, playerId);
          this.applyResultData(data, playerId);
      } catch (err) {
          console.error('Failed to load result:', err);
      } finally {
          this.isLoading = false;
          this.aiLoading = false;
      }
    }

    applyResultData(data: any, playerId: string) {
        this.userWon      = data.userWon;
        this.finalRank    = data.finalRank;
        this.totalPlayers = data.totalPlayers;
        this.score        = data.score;
        this.accuracy     = data.accuracy;
        this.avgSpeedSecs = data.avgSpeedSecs;

        this.finalStandings = (data.leaderboard || []).map((p: any) => ({
            rank: p.rank, username: p.username,
            score: p.score, isYou: p.playerId === playerId
        }));

        const attrColors: Record<string, string> = {
            LOGIC: '#ffffff', SPEED: '#00ffff',
            FOCUS: '#ff51fa', EXECUTION: '#ffffff', MEMORY: '#ffffff'
        };
        this.cognitiveAttributes = (data.cognitiveAttributes || []).map((a: any) => ({
            name: a.name, value: a.value, color: attrColors[a.name] || '#ffffff'
        }));

        this.battlePersona       = data.persona;
        this.aiAnalysis          = data.aiAnalysis         || '';
        this.aiAnalysisFallback  = data.aiAnalysisFallback || false;
    }

    playAgain()  { this.router.navigate(['/lobby']); }
    retry()      { this.router.navigate(['/lobby']); }
    newBattle()  { this.router.navigate(['/']);      }

    canLeave(): boolean {
      // Disable back button completely
      history.pushState(null, '', location.href);
      return false;
    }
}