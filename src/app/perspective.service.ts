import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerspectiveService {
  private _activePerspective: 'user' | 'owner' = 'user';

  get activePerspective(): 'user' | 'owner' {
    return this._activePerspective;
  }

  togglePerspective(): void {
    this._activePerspective = this._activePerspective === 'user' ? 'owner' : 'user';
  }
}
