import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements  CanActivate{
  constructor(private storage: Storage, private router: Router) {

  }
  async canActivate() {
    const isUserLoggedIn = await this.storage.get('isUserLoggedIn');
    if (isUserLoggedIn) {
      return true;
    }
    this.router.navigateByUrl('/login');
    return false;
  }
}
