import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

   roomTypes = [
    {
      "id": "mixed-bag",
      "title": "Mixed Bag",
      "description": "A chaotic swirl of every topic. Perfect for the ultimate generalist.",
      "icon": "mixed-bag.svg"
    },
    {
      "id": "science-tech",
      "title": "Science & Tech",
      "description": "Quantum physics to Javascript frameworks. Not for the faint of heart.",
      "icon": "science-tech.svg"
    },
    {
      "id": "history-culture",
      "title": "History & Culture",
      "description": "Uncover the secrets of civilizations and artistic revolutions.",
      "icon": "history-culture.svg"
    },
    {
      "id": "pop-culture",
      "title": "Pop Culture",
      "description": "Movies, music, and the digital zeitgeist. Stay relevant.",
      "icon": "pop-culture.svg"
    },
    {
      "id": "brain-teasers",
      "title": "Brain Teasers",
      "description": "Logic puzzles and lateral thinking challenges. Sharpen your mind.",
      "icon": "brain-teasers.svg"
    },
    {
      "id": "hardcore-mode",
      "title": "Hardcore Mode",
      "description": "One wrong answer and you're out. Maximum pressure.",
      "icon": "hardcore-mode.svg"
    },
    {
      "id": "gaming-esports",
      "title": "Gaming & Esports",
      "description": "From 8-bit classics to the latest global tournament metas.",
      "icon": "gaming-esports.svg"
    },
    {
      "id": "sports",
      "title": "Sports",
      "description": "The physics of the field and the history of champions.",
      "icon": "sports.svg"
    }
  ];


  infoCards = [
  {
    "id": "real-time-battles",
    "icon": "players.svg",
    "title": "REAL-TIME QUIZ BATTLES",
    "description": "Deploy your knowledge in high-velocity arena matches. Compete with up to 10 players simultaneously where every millisecond counts. Our unique speed-based scoring algorithm rewards both accuracy and rapid neural firing.",
    "badges": [
      "10 PLAYERS",
      "LOW LATENCY"
    ]
  },
  {
    "id": "instant-play",
    "icon": "lightning.svg",
    "title": "INSTANT PLAY",
    "description": "Frictionless entry into the matrix. Experience our zero-signup flow—simply designate an alias and connect to a neural uplink immediately. No forms, no delays, just pure competitive intellect.",
    "badges": [
      "NO SIGNUP",
      "QUICK JOIN"
    ]
  },
  {
    "id": "diverse-arenas",
    "icon": "grid.svg",
    "title": "DIVERSE ARENAS",
    "description": "Master multiple intelligence domains. Choose from specialized battlegrounds like Brain Teasers for logic, Hardcore Mode for high-stakes pressure, or tactical science and gaming sectors.",
    "badges": [
      "8+ THEMES",
      "DAILY ROTATION"
    ]
  },
  {
    "id": "cognitive-snapshot",
    "icon": "question-mind.svg",
    "title": "COGNITIVE SNAPSHOT",
    "description": "Post-battle diagnostics for high-performers. Receive a deep neural analysis including metrics on response latency, logic consistency, and category-specific accuracy to sharpen your competitive edge.",
    "badges": [
      "PERFORMANCE AI",
      "STAT TRACKING"
    ]
  }
]



}
