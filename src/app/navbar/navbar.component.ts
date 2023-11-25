import { Component } from '@angular/core';
import { PerspectiveService } from '../perspective.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // Inject PerspectiveService i konstruktorn
  constructor(public perspectiveService: PerspectiveService) {}

  // Använd service-metoden för att växla perspektiv
  togglePerspective(): void {
    this.perspectiveService.togglePerspective();
  }
}
