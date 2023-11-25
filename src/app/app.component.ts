import { Component } from '@angular/core';
import { PerspectiveService } from './perspective.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Leontinas-blog';

  // Inject PerspectiveService i konstruktorn
  constructor(public perspectiveService: PerspectiveService) {}

  // Denna metod anropas när jag vill växla perspektiv
  togglePerspective() {
    this.perspectiveService.togglePerspective();
  }
}
