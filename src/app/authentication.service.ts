import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public userData: Observable<firebase.User>;
  public displayModal = true;
  public email: string;
  constructor(private angularFireAuth: AngularFireAuth, private router: Router) {
    this.userData = angularFireAuth.authState;
  }

  /* Sign in */
  SignIn(email: string, password: string) {
    this.angularFireAuth.signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Youre in!');
        this.email = email;
        this.displayModal = false;
        this.router.navigateByUrl('/content');
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }
  
  public getEmail(){
    return this.email;
  }
}

