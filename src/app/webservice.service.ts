import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Subject } from 'rxjs';
import SockJS from 'sockjs-client';
import { Client, Stomp } from '@stomp/stompjs';
import { environment } from '../environments/environment';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private apiUrl = environment.apiUrl;
     private wsUrl = environment.wsUrl;
    // WebSocket related
    private stompClient: any;
    private connected = false;
    // Subjects for WebSocket events
    private playerListSubject = new Subject<any>();
    private chatMessageSubject = new Subject<any>();
    private battleStartSubject = new Subject<any>();

    constructor(private http: HttpClient) { }

      // Simple encrypt function
    encrypt(data: string): string {
        return btoa(encodeURIComponent(data));
    }

    // Simple decrypt function
    decrypt(data: string): string {
        return decodeURIComponent(atob(data));
    }

    async joinRoom(roomTypeId: number): Promise<any> {
        return await lastValueFrom(
            this.http.post(`${this.apiUrl}/rooms/join`, { roomTypeId })
        );
    }

    async joinRoomByCode(roomCode: string, username: string): Promise<any> {
        return await lastValueFrom(
            this.http.post(`${this.apiUrl}/rooms/join-by-code`, { roomCode, username })
        );
    }

    async getRoomTypes(): Promise<any> {
        return await lastValueFrom(
            this.http.get(`${this.apiUrl}/room-types`)
        );
    }

    async getRoomTypeById(id: number): Promise<any> {
        return await lastValueFrom(
            this.http.get(`${this.apiUrl}/room-types/${id}`)
        );
    }

    // ==================== WEBSOCKET FUNCTIONS ====================

    // Connect to WebSocket
    connectWebSocket(roomCode: string, username: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            const socket = new SockJS(this.wsUrl);
            this.stompClient = Stomp.over(socket);
            
            this.stompClient.connect({}, () => {
                this.connected = true;
                console.log('WebSocket connected');
                
                // Subscribe to room messages
                this.stompClient.subscribe(`/topic/room/${roomCode}`, (message:any) => {
                    const data = JSON.parse(message.body);
                    this.handleWebSocketMessage(data);
                });
                
                // Send join message
                this.stompClient.send('/app/quiz/join', {}, JSON.stringify({
                    roomCode: roomCode,
                    username: username
                }));
                
                resolve(true);
            }, (error:any) => {
                console.error('WebSocket connection error:', error);
                reject(error);
            });
        });
    }

    // Send chat message
    sendChatMessage(roomCode: string, username: string, text: string): void {
        if (this.connected && this.stompClient) {
            this.stompClient.send('/app/quiz/chat', {}, JSON.stringify({
                roomCode: roomCode,
                username: username,
                text: text
            }));
        }
    }

    // Send pulse (special message)
    sendPulse(roomCode: string, username: string): void {
        this.sendChatMessage(roomCode, username, '🔥 Sent a neural pulse!');
    }

    // Disconnect WebSocket
    disconnectWebSocket(): void {
        if (this.stompClient) {
            this.stompClient.disconnect();
            this.connected = false;
        }
    }

    // Handle incoming WebSocket messages
    private handleWebSocketMessage(data: any): void {
        switch(data.type) {
            case 'PLAYER_LIST':
                this.playerListSubject.next(data);
                break;
            case 'CHAT_MESSAGE':
                this.chatMessageSubject.next(data);
                break;
            case 'BATTLE_START':
                this.battleStartSubject.next(data);
                break;
        }
    }

    // Observables for components to subscribe
    onPlayerList() {
        return this.playerListSubject.asObservable();
    }

    onChatMessage() {
        return this.chatMessageSubject.asObservable();
    }

    onBattleStart() {
        return this.battleStartSubject.asObservable();
    }

    // Check if WebSocket is connected
    isWebSocketConnected(): boolean {
        return this.connected;
    }


}