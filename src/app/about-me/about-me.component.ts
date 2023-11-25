import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  // Metod som hanterar kontaktformulärets 'submit'-event
  onSubmit(form: any): void {
    // Loggar formens värden till konsolen när formuläret skickas
    console.log('Formulärdata:', form.value);
  }
}
