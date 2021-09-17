import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private auth: AngularFireAuth, private router: Router) {
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return new Promise<boolean>((resolve, reject) => {
      const sub = this.auth.user.subscribe(
        (user) => {
          if (user === null) {
            this.router.navigateByUrl('login')
            resolve(false);
          } else {
            resolve(true);
          }
        },
        () => {this.router.navigateByUrl('login')
        resolve(false); },
        () => {
          sub.unsubscribe();
        })
    })


  }











}
