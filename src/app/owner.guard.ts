import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { PerspectiveService } from './perspective.service';

@Injectable({
  providedIn: 'root'
})
export class OwnerGuard implements CanActivate {
  constructor(private router: Router, private perspectiveService: PerspectiveService) {}

  canActivate(): boolean {
    if (this.perspectiveService.activePerspective === 'owner') {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
