import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LobbyComponent } from './lobby/lobby.component';
import { ArenaComponent } from './arena/arena.component';
import { ResultComponent } from './result/result.component';
import { NavigationGuard } from './navigation.guard';

export const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent
    },
    {
        path: 'lobby',
        component: LobbyComponent,
        canDeactivate: [NavigationGuard]
    },
    {
        path: 'arena',
        component: ArenaComponent,
        canDeactivate: [NavigationGuard]
    },
    {
        path: 'result',
        component: ResultComponent
    }
];
