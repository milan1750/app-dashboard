import { Injectable } from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../auth/auth.service';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {
  }

  canActivate(): boolean {
    if (!this._authService.loggedIn()) {
      return true;
    } else {
      this._router.navigate(['/login/required']);
      return false;
    }
  }
}
