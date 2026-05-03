import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ApiService } from './webservice.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'neuroarena-ui';

  currentRoute = '';

  constructor(private router: Router, private apiService: ApiService){

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event:any) => {

        this.currentRoute = event.urlAfterRedirects;

      });

  }

  async ngOnInit() {
    await this.apiService.loadConfig();
  }

  openGithub(){

    window.open('https://github.com/deepeshdm/NeuroArena', '_blank');

  }

}