import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lobby',
  imports: [CommonModule],
  templateUrl: './lobby.component.html',
  styleUrl: './lobby.component.scss'
})
export class LobbyComponent {

  constructor(private router: Router){}

  TOTAL_SLOTS = 10

players = [
  { name:'SYNTESHETE_X', img:'face1.jpg', status:'READY' },
  { name:'KINETIC_FLOW', img:'face2.jpg', status:'SYNCED' },
  { name:'NULL_VECTOR', img:'face3.jpg', status:'SYNCED' },
  { name:'CYBER_GHOST', img:'face4.jpg', status:'SYNCED' },
  { name:'SUPERNOVA', img:'face5.jpg', status:'SYNCED' },
  { name:'LOGIC_GATE', img:'face6.jpg', status:'SYNCED' },
  { name:'BRAIN_PULSE', img:'face7.jpg', status:'SYNCED' }
]

// creates array [0,1,2,3...]
slots = Array.from({ length: this.TOTAL_SLOTS });

  navigateToArena(roomId?: string){

    // optional: pass room type
    if(roomId)
      this.router.navigate(['/arena'], { queryParams: { type: roomId } })

    else
      this.router.navigate(['/arena'])

  }


}
