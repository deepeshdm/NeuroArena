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

    // ==================== ROOM APIS ====================

    /**
     * Join or create a room (auto-generates username and avatar)
     * @param roomTypeId - The type of room (1-8)
     */
    async joinRoom(roomTypeId: number): Promise<any> {
        try {
            return await lastValueFrom(
                this.http.post(`${this.apiUrl}/rooms/join`, { roomTypeId })
            );
        } catch (error) {
            throw error;
        }
    }

    /**
     * Join a specific room with custom username
     * @param roomCode - 6-digit room code
     * @param username - Custom username (3-20 chars)
     */
    async joinRoomByCode(roomCode: string, username: string): Promise<any> {
        try {
            return await lastValueFrom(
                this.http.post(`${this.apiUrl}/rooms/join-by-code`, { roomCode, username })
            );
        } catch (error) {
            throw error;
        }
    }

    // ==================== ROOM TYPE APIS ====================

    /**
     * Get all available room types
     */
    async getRoomTypes(): Promise<any> {
        try {
            return await lastValueFrom(
                this.http.get(`${this.apiUrl}/room-types`)
            );
        } catch (error) {
            throw error;
        }
    }

    /**
     * Get room type by ID
     * @param id - Room type ID (1-8)
     */
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