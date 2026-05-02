import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

export interface BlockNavigation {
    canLeave(): boolean;
}

@Injectable({ providedIn: 'root' })
export class NavigationGuard implements CanDeactivate<BlockNavigation> {
    canDeactivate(component: BlockNavigation): boolean {
        if (!component.canLeave()) {
            return confirm('Are you sure you want to leave? Your progress will be lost.');
        }
        return true;
    }
}