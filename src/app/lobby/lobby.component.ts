import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../webservice.service';

@Component({
  selector: 'app-lobby',
  imports: [CommonModule],
  templateUrl: './lobby.component.html',
  styleUrl: './lobby.component.scss'
})
export class LobbyComponent {

  roomCode: string = '';
  battleId: string = '';
  username: string = '';
  avatarUrl: string = '';
  roomTypeId: number = 0;

  constructor(private router: Router, private webservice: ApiService){}


  async ngOnInit() {
    // Retrieve and decrypt data from localStorage
    const encryptedUsername = localStorage.getItem('username');
    const encryptedAvatar = localStorage.getItem('avatar');
    const encryptedRoomCode = localStorage.getItem('roomCode');
    const encryptedBattleId = localStorage.getItem('battleId');
    const encryptedRoomTypeId = localStorage.getItem('roomTypeId');

    if (!encryptedUsername || !encryptedRoomCode) {
      this.router.navigate(['/']);
      return;
    }

    // Decrypt data
    this.username = this.webservice.decrypt(encryptedUsername);
    this.avatarUrl = encryptedAvatar ? this.webservice.decrypt(encryptedAvatar) : '';
    this.roomCode = this.webservice.decrypt(encryptedRoomCode);
    this.battleId = encryptedBattleId ? this.webservice.decrypt(encryptedBattleId) : '';
    this.roomTypeId = encryptedRoomTypeId ? parseInt(this.webservice.decrypt(encryptedRoomTypeId)) : 0;
    console.log('Lobby initialized for room:', this.roomCode);
    console.log('Player:', this.username);

  }



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
