import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Subject } from 'rxjs';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private apiUrl = environment.apiUrl;
    private wsUrl = environment.wsUrl;

    private stompClient: any;
    private connected = false;

    // Subjects
    private playerListSubject    = new Subject<any>();
    private chatMessageSubject   = new Subject<any>();
    private battleStartSubject   = new Subject<any>();
    private questionSubject      = new Subject<any>();

    constructor(private http: HttpClient) { }

    encrypt(data: string): string {
        return btoa(encodeURIComponent(data));
    }

    decrypt(data: string): string {
        return decodeURIComponent(atob(data));
    }

    isConnected(): boolean {
        return this.connected;
    }

    // ─────────────────────────────────────────────────────────────
    // HTTP
    // ─────────────────────────────────────────────────────────────

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
        return await lastValueFrom(this.http.get(`${this.apiUrl}/room-types`));
    }

    async getRoomTypeById(id: number): Promise<any> {
        return await lastValueFrom(this.http.get(`${this.apiUrl}/room-types/${id}`));
    }

    // ─────────────────────────────────────────────────────────────
    // WEBSOCKET
    // ─────────────────────────────────────────────────────────────

    connectWebSocket(roomCode: string, username: string, playerId: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            const socket = new SockJS(this.wsUrl);
            this.stompClient = Stomp.over(socket);

            this.stompClient.connect({}, () => {
                this.connected = true;
                console.log('WebSocket connected');

                // ── Subscribe to room topic (lobby + broadcast events) ──
                this.stompClient.subscribe(`/topic/room/${roomCode}`, (message: any) => {
                    const data = JSON.parse(message.body);
                    this.handleWebSocketMessage(data);
                });

                if(!playerId){
                    console.warn('No playerId provided, personal queue will not be subscribed');
                }

                // ── Subscribe to personal queue for questions ──────────
                this.stompClient.subscribe(`/topic/player/${playerId}`, (message: any) => {
                    console.log('Received message on personal queue:', message);
                    const data = JSON.parse(message.body);
                    this.handleWebSocketMessage(data);
                });

                // Send join message to lobby
                this.stompClient.send('/app/quiz/join', {}, JSON.stringify({
                    roomCode,
                    username
                }));

                resolve(true);
            }, (error: any) => {
                console.error('WebSocket connection error:', error);
                reject(error);
            });
        });
    }

    private handleWebSocketMessage(data: any): void {
        console.log('Received WebSocket message:', data);
        switch (data.type) {
            case 'PLAYER_LIST':
                this.playerListSubject.next(data);
                break;
            case 'CHAT_MESSAGE':
                this.chatMessageSubject.next(data);
                break;
            case 'BATTLE_START':
                this.battleStartSubject.next(data);
                break;
            case 'QUESTION':
                this.questionSubject.next(data.data ?? data);
                break;
            default:
                console.warn('Unknown message type:', data.type);
        }
    }

    // ─────────────────────────────────────────────────────────────
    // SEND METHODS
    // ─────────────────────────────────────────────────────────────

    sendChatMessage(roomCode: string, username: string, text: string): void {
        if (this.connected && this.stompClient) {
            this.stompClient.send('/app/quiz/chat', {}, JSON.stringify({ roomCode, username, text }));
        }
    }

    sendPulse(roomCode: string, username: string): void {
        this.sendChatMessage(roomCode, username, '🔥 Sent a neural pulse!');
    }

    sendLeave(roomCode: string, username: string): void {
        if (this.connected && this.stompClient) {
            this.stompClient.send('/app/quiz/leave', {}, JSON.stringify({ roomCode, username }));
        }
    }

    sendReady(roomCode: string, username: string): void {
        if (this.connected && this.stompClient) {
            this.stompClient.send('/app/quiz/ready', {}, JSON.stringify({ roomCode, username }));
        }
    }

    requestCurrentQuestion(battleId: string, playerId: string): void {
        if (this.connected && this.stompClient) {
            this.stompClient.send('/app/quiz/get-question', {}, JSON.stringify({ battleId, playerId }));
            console.log('Requested question for battle:', battleId);
        } else {
            console.warn('requestCurrentQuestion called but WebSocket is not connected');
        }
    }

    disconnectWebSocket(): void {
        if (this.stompClient) {
            this.stompClient.disconnect();
            this.connected = false;
        }
    }

    // ─────────────────────────────────────────────────────────────
    // OBSERVABLES
    // ─────────────────────────────────────────────────────────────

    onPlayerList()   { return this.playerListSubject.asObservable(); }
    onChatMessage()  { return this.chatMessageSubject.asObservable(); }
    onBattleStart()  { return this.battleStartSubject.asObservable(); }
    onQuestion()     { return this.questionSubject.asObservable(); }
    isWebSocketConnected(): boolean { return this.connected; }
}