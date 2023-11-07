import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Den här selektorn är standard, men du kan ändra den om du vill.
  templateUrl: './app.component.html', // Sökväg till HTML-mallen för komponenten.
  styleUrls: ['./app.component.css'] // Sökväg till CSS-stilmallen för komponenten.
})
export class AppComponent {
  title = 'Leontinas-blog'; // Lägg till denna egenskap här
  // Denna variabel håller koll på vilket perspektiv som är aktivt.
  // Vi initierar den som 'user' som standard.
  activePerspective: 'user' | 'owner' = 'user';

  // En metod för att byta perspektiv
  togglePerspective() {
    this.activePerspective = this.activePerspective === 'user' ? 'owner' : 'user';
  }
}
