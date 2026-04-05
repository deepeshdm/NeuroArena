import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'neuroarena-ui';

  openGithub(){
    window.open('https://github.com/deepeshdm/NeuroArena', '_blank');
  }

}
