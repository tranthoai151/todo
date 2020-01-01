import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodeAuthenticationService } from './hardcode-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private harCodeAuthenticationService: HardcodeAuthenticationService,
          private router: Router) { }
  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.harCodeAuthenticationService.isUserLoggedIn()) {
      return true;
    }
    return false;
  }
}
