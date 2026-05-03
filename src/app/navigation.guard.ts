import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ApiService } from './webservice.service';

export interface BlockNavigation {
    canLeave(): boolean;
}

@Injectable({ providedIn: 'root' })
export class NavigationGuard implements CanDeactivate<BlockNavigation> {
    
    canDeactivate(component: BlockNavigation): boolean {

        const api = new ApiService(null as any); // Create an instance to access decrypt method

        const rawRoomTypeId = localStorage.getItem('roomTypeId');
        const roomTypeId = parseInt(api.decrypt(rawRoomTypeId || '0'));


        if (!component.canLeave()) {
            return confirm('Are you sure you want to leave? Your progress will be lost.');
        }
        return true;
    }
}