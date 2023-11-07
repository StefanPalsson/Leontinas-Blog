// owner.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AppComponent } from './app.component'; // Förutsatt att app.component.ts finns i samma mapp

@Injectable({
  providedIn: 'root'
})
export class OwnerGuard implements CanActivate {
  constructor(private router: Router, private appComponent: AppComponent) {}

  canActivate(): boolean {
    if (this.appComponent.activePerspective === 'owner') {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
