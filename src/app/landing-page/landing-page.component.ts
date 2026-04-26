import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../webservice.service';

@Component({
  selector: 'app-landing-page',
  imports: [CommonModule],
  templateUrl: './landing-page.component.html', 
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  roomTypes: any[] = [];

  constructor(private router: Router, private webservice: ApiService){}

  async ngOnInit() {

    // fetch room types
    const response:any = await this.webservice.getRoomTypes();
    if(response.status==200 || response.status=='success'){
      this.roomTypes = response.data;
      console.log('Fetched room types:', this.roomTypes);
    }

  }

  navigateToLobby(roomId?: string){

    // optional: pass room type
    if(roomId)
      this.router.navigate(['/lobby'], { queryParams: { type: roomId } })

    else
      this.router.navigate(['/lobby'])

  }



  navigateToArena(){
    this.router.navigate(['/arena'])
  }


  infoCards = [
  {
    "id": "real-time-battles",
    "icon": "players.svg",
    "title": "REAL-TIME QUIZ BATTLES",
    "description": "Deploy your knowledge in high-velocity arena matches. Compete with up to 10 players simultaneously where every millisecond counts. Our unique speed-based scoring algorithm rewards both accuracy and rapid neural firing.",
    "descriptionHighlight": [
      { "text": "Deploy your knowledge in high-velocity arena matches. Compete with up to ", "highlight": false },
      { "text": "10 players simultaneously", "highlight": true, "color": "#c1fffe" },
      { "text": " where every millisecond counts. Our unique ", "highlight": false },
      { "text": "speed-based scoring", "highlight": true, "color": "#c1fffe" },
      { "text": " algorithm rewards both accuracy and rapid neural firing.", "highlight": false }
    ],
    "theme": "cyan",
    "badges": [
      { "label": "10 PLAYERS", "variant": "default" },
      { "label": "LOW LATENCY", "variant": "accent" }
    ]
  },
  {
    "id": "instant-play",
    "icon": "lightning.svg",
    "title": "INSTANT PLAY",
    "description": "Frictionless entry into the matrix. Experience our zero-signup flow—simply designate an alias and connect to a neural uplink immediately. No forms, no delays, just pure competitive intellect.",
    "descriptionHighlight": [
      { "text": "Frictionless entry into the matrix. Experience our ", "highlight": false },
      { "text": "zero-signup flow", "highlight": true, "color": "#ff51fa" },
      { "text": "—simply designate an alias and ", "highlight": false },
      { "text": "connect to a neural uplink immediately", "highlight": true, "color": "#ff51fa" },
      { "text": ". No forms, no delays, just pure competitive intellect.", "highlight": false }
    ],
    "theme": "magenta",
    "badges": [
      { "label": "NO SIGNUP", "variant": "default" },
      { "label": "QUICK JOIN", "variant": "accent" }
    ]
  },
  {
    "id": "diverse-arenas",
    "icon": "grid.svg",
    "title": "DIVERSE ARENAS",
    "description": "Master multiple intelligence domains. Choose from specialized battlegrounds like Brain Teasers for logic, Hardcore Mode for high-stakes pressure, or tactical science and gaming sectors.",
    "descriptionHighlight": [
      { "text": "Master multiple intelligence domains. Choose from specialized battlegrounds like ", "highlight": false },
      { "text": "Brain Teasers", "highlight": true, "color": "#ffff00" },
      { "text": " for logic, ", "highlight": false },
      { "text": "Hardcore Mode", "highlight": true, "color": "#ff5555" },
      { "text": " for high-stakes pressure, or tactical science and gaming sectors.", "highlight": false }
    ],
    "theme": "yellow",
    "badges": [
      { "label": "8+ THEMES", "variant": "default" },
      { "label": "DAILY ROTATION", "variant": "accent" }
    ]
  },
  {
    "id": "cognitive-snapshot",
    "icon": "question-mind.svg",
    "title": "COGNITIVE SNAPSHOT",
    "description": "Post-battle diagnostics for high-performers. Receive a deep neural analysis including metrics on response latency, logic consistency, and category-specific accuracy to sharpen your competitive edge.",
    "descriptionHighlight": [
      { "text": "Post-battle diagnostics for high-performers. Receive a deep ", "highlight": false },
      { "text": "neural analysis", "highlight": true, "color": "#c1fffe" },
      { "text": " including metrics on ", "highlight": false },
      { "text": "response latency, logic consistency, and category-specific accuracy", "highlight": true, "color": "#c1fffe" },
      { "text": " to sharpen your competitive edge.", "highlight": false }
    ],
    "theme": "cyan",
    "badges": [
      { "label": "PERFORMANCE AI", "variant": "default" },
      { "label": "STAT TRACKING", "variant": "accent" }
    ]
  }
]


}
