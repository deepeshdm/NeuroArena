import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../webservice.service';
import { FormsModule } from "@angular/forms";
import { AudioService } from '../audio.service';

@Component({
  selector: 'app-lobby',
  imports: [CommonModule, FormsModule],
  templateUrl: './lobby.component.html',
  styleUrl: './lobby.component.scss'
})
export class LobbyComponent {

  TOTAL_SLOTS = 0; 
  slots = Array.from({ length: this.TOTAL_SLOTS });

  showToast: boolean = false;
  toastMessage: string = '';
  toastType: 'success' | 'error' = 'success';
  // creates array [0,1,2,3...]
  roomCode: string = '';
  battleId: string = '';
  username: string = '';
  playerId: string = '';
  avatarUrl: string = '';
  roomTypeId: number = 0;
    // Chat
  messages: any[] = [];
  players: any[] = [];
  newMessage: string = '';
  // UI state
  isLoading: boolean = true;
  muteChat: boolean = false;
  isReady: boolean = false;
  allReady: boolean = false;
  battleStarted: boolean = false;  // set to true on BATTLE_START

  constructor(private router: Router, private webservice: ApiService, private audioService: AudioService){}


  async ngOnInit() {

    await this.webservice.loadConfig();
    const configData = await this.webservice.getConfig();
    if(configData){
      this.TOTAL_SLOTS = configData.maxPlayers || 0;
      this.slots = Array.from({ length: this.TOTAL_SLOTS });
    }else{
      console.warn('Failed to load config or invalid config format:', configData);
    }

    this.playAudio();
    // Push a dummy state so back button hits this first
    history.pushState(null, '', location.href);
    window.addEventListener('popstate', this.onPopState);

    // Retrieve and decrypt data from localStorage
    const encryptedUsername = localStorage.getItem('username');
    const encryptedAvatar = localStorage.getItem('avatar');
    const encryptedRoomCode = localStorage.getItem('roomCode');
    const encryptedBattleId = localStorage.getItem('battleId');
    const encryptedPlayerId = localStorage.getItem('playerId');
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
    this.playerId = encryptedPlayerId ? this.webservice.decrypt(encryptedPlayerId) : '';
    this.roomTypeId = encryptedRoomTypeId ? parseInt(this.webservice.decrypt(encryptedRoomTypeId)) : 0;
    console.log('Lobby initialized for room:', this.roomCode);
    console.log('Player:', this.username);
    // Connect WebSocket
    await this.connectWebSocket();
  }


  playAudio() {
    try {
      this.audioService.playMusic('lobby');
    } catch (error) {
      console.error('Failed to play lobby music:', error);
    }
  }


  async connectWebSocket() {
    try {

    
      if(!this.playerId){
        console.log(localStorage);
        console.warn('LOBBY:  No playerId found in localStorage, generating new one');
      }

      // lobby.component.ts
      await this.webservice.connectWebSocket(this.roomCode, this.username, this.playerId);
      this.isLoading = false;
      
      // Listen for events
      this.webservice.onPlayerList().subscribe((data) => {
          this.players = data.players;
          console.log('Updated player list:', this.players);
          // Check if current player is ready
          const currentPlayer = this.players.find(p => p.username === this.username);
          if (currentPlayer) {
              this.isReady = currentPlayer.status === 'READY';
          }
          // Check if all players are ready
          const allPlayersReady = this.players.length === this.TOTAL_SLOTS && this.players.every(p => p.status === 'READY');
          this.allReady = allPlayersReady;
      });
      
      this.webservice.onChatMessage().subscribe((message) => {
        // if(this.muteChat){
        //   console.log('Chat is muted. Ignoring message:', message);
        //   return;
        // };
        this.messages.push(message);
        console.log('All messages:', this.messages);

        // Auto-scroll to bottom
        this.scrollChatToBottom();

      });
      
      this.webservice.onBattleStart().subscribe((data) => {
        console.log('Battle started event received');

        if(data.type === 'BATTLE_START'){
          this.battleStarted = true;
          this.router.navigate(['/arena'], { 
            queryParams: { 
              battleId: this.battleId,
              roomCode: this.roomCode 
            } 
          });
        };

        // Check if this is Hardcore Mode (roomTypeId = 6)
        if (data.roomTypeId) {
          localStorage.setItem('roomTypeId', this.webservice.encrypt(data.roomTypeId.toString()));
        }

      });
      
    } catch (error) {
      console.error('WebSocket connection failed:', error);
      this.isLoading = false;
    }
  }

  showToastMessage(message: string, type: 'success' | 'error') {
    this.toastMessage = message;
    this.toastType = type;
    this.showToast = true;
    
    // Auto hide after 3 seconds
    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }

  copyRoomCode() {
    const roomCode = this.roomCode;
    
    if (!roomCode) {
      this.showToastMessage('Room code not found!', 'error');
      return;
    }
    
    // Copy to clipboard
    navigator.clipboard.writeText(roomCode).then(() => {
      this.showToastMessage(`Room code ${roomCode} copied to clipboard!`, 'success');
    }).catch(err => {
      console.error('Failed to copy:', err);
      this.showToastMessage('Failed to copy room code', 'error');
    });
  }


  navigateToArena(roomId?: string){

    // optional: pass room type
    if(roomId)
      this.router.navigate(['/arena'], { queryParams: { type: roomId } })

    else
      this.router.navigate(['/arena'])

  }

  sendMessage() {
    if (this.newMessage.trim() === '') return;
    this.webservice.sendChatMessage(this.roomCode, this.username, this.newMessage);
    this.newMessage = '';
  }

  sendPulse() {
    this.webservice.sendPulse(this.roomCode, this.username);
  }

  toggleMuteChat() {
    this.muteChat = !this.muteChat;

    if(this.muteChat){
      this.audioService.setVolume(0); // Switch to non-hardcore battle music when muting chat
    }else{
      this.audioService.setVolume(1); // Restore volume when unmuting chat
    }

  }

  exitRoom() {
    if (confirm('Are you sure you want to leave the lobby?')) {
        // Send leave message via WebSocket
        this.webservice.sendLeave(this.roomCode, this.username);
        
        // Disconnect WebSocket
        this.webservice.disconnectWebSocket();
        
        // Clear localStorage
        localStorage.clear();
        
        // Navigate to landing page
        this.router.navigate(['/']);
    }
  }

  sendReady() {
      if (!this.isReady) {
          this.webservice.sendReady(this.roomCode, this.username);
      }
  }

  ngOnDestroy() {
    window.removeEventListener('popstate', this.onPopState);
  }

  canLeave(): boolean {
        return this.battleStarted;  // allow leaving only after battle starts (redirect to arena)
  }

  onPopState = () => {
    history.pushState(null, '', location.href);  // keep pushing to trap the back button
  }

  private scrollChatToBottom() {
    setTimeout(() => {
      const container = document.querySelector('.activity-feed-container');
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    }, 50); // Small delay to ensure DOM is updated
  }

}
