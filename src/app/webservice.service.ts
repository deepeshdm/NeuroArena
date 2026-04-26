import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

 
    async joinRoom(roomTypeId: number): Promise<any> {
        try {
            return await lastValueFrom(
                this.http.post(`${this.apiUrl}/rooms/join`, { roomTypeId })
            );
        } catch (error) {
            throw error;
        }
    }

 
    async joinRoomByCode(roomCode: string, username: string): Promise<any> {
        try {
            return await lastValueFrom(
                this.http.post(`${this.apiUrl}/rooms/join-by-code`, { roomCode, username })
            );
        } catch (error) {
            throw error;
        }
    }

    async getRoomTypes(): Promise<any> {
        try {
            return await lastValueFrom(
                this.http.get(`${this.apiUrl}/room-types`)
            );
        } catch (error) {
            throw error;
        }
    }

 
    async getRoomTypeById(id: number): Promise<any> {
        try {
            return await lastValueFrom(
                this.http.get(`${this.apiUrl}/room-types/${id}`)
            );
        } catch (error) {
            throw error;
        }
    }
}