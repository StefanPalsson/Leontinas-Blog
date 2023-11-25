import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { OwnerGuard } from './owner.guard';
import { AppComponent } from './app.component'; // Importera AppComponent

// Skapa en mock för Router
class MockRouter {
  navigate = jasmine.createSpy('navigate');
}

// Skapa en mock för AppComponent
class MockAppComponent {
  activePerspective = 'user';
}

describe('OwnerGuard', () => {
  let guard: OwnerGuard;
  let mockAppComponent: MockAppComponent;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        OwnerGuard,
        { provide: Router, useClass: MockRouter },
        { provide: AppComponent, useClass: MockAppComponent }, // Använd mocken för AppComponent
      ],
    });
    guard = TestBed.inject(OwnerGuard);
    mockAppComponent = TestBed.inject(AppComponent) as unknown as MockAppComponent; // Casta till MockAppComponent
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should activate when activePerspective is owner', () => {
    mockAppComponent.activePerspective = 'owner'; // Sätt perspektivet till 'owner'
    expect(guard.canActivate()).toBe(true);
  });

  it('should not activate when activePerspective is not owner', () => {
    mockAppComponent.activePerspective = 'user'; // Sätt perspektivet till 'user'
    expect(guard.canActivate()).toBe(false);
    expect(router.navigate).toHaveBeenCalledWith(['/home']); // Förvänta att omdirigering sker
  });
});
