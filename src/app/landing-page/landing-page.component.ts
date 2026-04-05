import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  imports: [],
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



}
