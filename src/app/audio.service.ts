// services/audio.service.ts
import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private audioElement: HTMLAudioElement | null = null;
  private currentAudio: string = '';
  private isMuted: boolean = false;
  private volume: number = 0.5;

  // Audio file paths
  private readonly AUDIO = {
    lobby: '/assets/audio/lobby.mp3',
    battle: '/assets/audio/battle.mp3',
    hardcore: '/assets/audio/hardcore.mp3'
  };

  constructor(private router: Router) {
    this.initAudio();
    this.trackRouteChanges();
  }

  private initAudio() {
    this.audioElement = new Audio();
    this.audioElement.loop = true;
    this.audioElement.volume = this.volume;
  }

  private trackRouteChanges() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateMusicForCurrentRoute();
    });
  }

  private updateMusicForCurrentRoute() {
    const url = this.router.url;
    
    // Lobby or waiting room
    if (url.includes('/lobby') || url.includes('/waiting-room')) {
      this.playMusic('lobby');
    } 
    // Arena / Battle screen
    else if (url.includes('/arena')) {
      // Don't auto-play here - will be set by arena component
      // Arena component will call setBattleMusic() when it knows mode
      return;
    } 
    else {
      // Stop music on other pages
      this.stopMusic();
    }
  }

  playMusic(type: 'lobby' | 'battle' | 'hardcore') {
    const audioUrl = this.AUDIO[type];
    
    if (this.currentAudio === audioUrl && this.audioElement?.src) {
      return; // Already playing this track
    }

    this.currentAudio = audioUrl;
    
    if (this.audioElement) {
      this.audioElement.src = audioUrl;
      if (!this.isMuted) {
        this.audioElement.load();
        this.audioElement.play().catch(err => {
          console.log('Audio play failed:', err);
        });
      }
    }
  }

  // For arena component to set correct music based on mode
  setBattleMusic(isHardcoreMode: boolean) {
    if (isHardcoreMode) {
      this.playMusic('hardcore');
    } else {
      this.playMusic('battle');
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.audioElement) {
      this.audioElement.muted = this.isMuted;
    }
  }

  setVolume(volume: number) {
    this.volume = Math.min(1, Math.max(0, volume));
    if (this.audioElement) {
      this.audioElement.volume = this.volume;
    }
  }

  getVolume(): number {
    return this.volume;
  }

  isAudioMuted(): boolean {
    return this.isMuted;
  }

  stopMusic() {
    if (this.audioElement) {
      this.audioElement.pause();
      this.audioElement.currentTime = 0;
    }
  }
}