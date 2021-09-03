import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public userData: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth) {
    this.userData = angularFireAuth.authState;
  }

  /* Sign in */
  SignIn(email: string, password: string) {
    this.angularFireAuth.signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Youre in!');
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }
}
