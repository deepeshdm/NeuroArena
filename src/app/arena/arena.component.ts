import { Component } from '@angular/core';

interface Option {
  label: string;
  text: string;
  isSelected?: boolean;
}

interface Question {
  id: number;
  current: number;
  total: number;
  timeLimit: number;
  category: string;
  level: number;
  text: string;
  options: Option[];
}

interface Leaderboard {
  rank: number;
  username: string;
  avatar: string;
  score: number;
  ptsTo2nd?: number;
  isYou?: boolean;
}

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.scss']
})
export class ArenaComponent {

  currentQuestion: Question = {
    id: 1,
    current: 8,
    total: 10,
    timeLimit: 12,
    category: 'Quantum Physics',
    level: 4,
    text: 'What term describes the phenomenon where two particles remain connected so that the state of one instantly influences the other?',
    options: [
      {
        label: 'A',
        text: 'Quantum Superposition',
        isSelected: false
      },
      {
        label: 'B',
        text: 'Quantum Entanglement',
        isSelected: true
      },
      {
        label: 'C',
        text: 'Schrödinger Paradox',
        isSelected: false
      },
      {
        label: 'D',
        text: 'Particle Locality',
        isSelected: false
      }
    ]
  };

  leaderboard: Leaderboard[] = [
    {
      rank: 1,
      username: 'Cortex_Master',
      avatar: 'alien-faces/face1.jpg',
      score: 12450
    },
    {
      rank: 2,
      username: 'Neon_Nexus',
      avatar: 'alien-faces/face2.jpg',
      score: 11900
    },
    {
      rank: 3,
      username: 'YOU',
      avatar: 'alien-faces/face3.jpg',
      score: 11350,
      ptsTo2nd: 580,
      isYou: true
    },
    {
      rank: 4,
      username: 'SynapseX',
      avatar: 'alien-faces/face4.jpg',
      score: 10800
    },
    {
      rank: 5,
      username: 'Ghost_Link',
      avatar: 'alien-faces/face5.jpg',
      score: 9200
    }
  ];

  progressPercentage = 80; // 8 out of 10 questions

  selectOption(index: number) {
    this.currentQuestion.options.forEach((opt, i) => {
      opt.isSelected = i === index;
    });
  }

  activateTimeWarp() {
    // Add time warp logic
    console.log('Time-Warp activated!');
  }

}