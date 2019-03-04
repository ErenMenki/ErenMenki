import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

// Globals
import { GlobalsService } from './globals.service';

@Injectable({
  providedIn: 'root'
})
export class ViasAuthService implements CanActivate {

  constructor(private globals: GlobalsService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.globals.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/account/login']);
    return false;
  }
}
