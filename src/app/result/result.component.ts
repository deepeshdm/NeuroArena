import { Component } from '@angular/core';

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
}

interface ResultData {
  finalRank: number;
  totalPlayers: number;
  score: number;
  accuracy: number;
  avgSpeed: number;
}

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {

  finalStandings: FinalStanding[] = [
    {
      rank: 1,
      username: 'Xero_01',
      score: 16400
    },
    {
      rank: 4,
      username: 'You',
      score: 14250
    },
    {
      rank: 2,
      username: 'NeonSavant',
      score: 15820
    },
    {
      rank: 3,
      username: 'NeuralGhost',
      score: 14990
    },
    {
      rank: 5,
      username: 'Cortex_Flux',
      score: 13110
    },
    {
      rank: 6,
      username: 'Bit_Oracle',
      score: 12450
    }
  ];

  battlePersona: BattlePersona = {
    name: 'The Architect',
    description: 'You build mental structures with terrifying precision. Your logic is your strongest weapon, allowing you to bypass noise effortlessly.',
    topSkill: 'Structural Logic',
    skillLevel: 'Elite',
    growthArea: 'Speed-Focus Synergy',
    growthValue: 'Aura-7'
  };

  cognitiveAttributes: CognitiveAttribute[] = [
    {
      name: 'LOGIC',
      value: 94,
      color: '#ffffff'
    },
    {
      name: 'FOCUS',
      value: 88,
      color: '#ff51fa'
    },
    {
      name: 'MEMORY',
      value: 72,
      color: '#ffffff'
    },
    {
      name: 'SPEED',
      value: 91,
      color: '#00ffff'
    },
    {
      name: 'EXECUTION',
      value: 85,
      color: '#ffffff'
    }
  ];

  resultData: ResultData = {
    finalRank: 4,
    totalPlayers: 10,
    score: 14250,
    accuracy: 98.4,
    avgSpeed: 1.2
  };

  playAgain() {
    // Navigate to same arena or lobby
    console.log('Play Again clicked');
  }

  newBattle() {
    // Navigate to battle selection
    console.log('New Battle clicked');
  }

}