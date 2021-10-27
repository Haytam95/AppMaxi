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

  constructor(private angularFireAuth: AngularFireAuth, private router: Router) {
    this.userData = angularFireAuth.authState;
  }

  /* Sign in */
  public SignIn(email: string, password: string): void {
    this.angularFireAuth.signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Youre in!');
        this.displayModal = false;
        this.router.navigateByUrl('/content');
      })
      .catch(err => {
        alert('Contraseña o Usuario incorrectos!');
        console.log('Something went wrong:', err.message);
      });
  }

  /* Sign up */
  public SignUp(email: string, password: string): void {
    this.angularFireAuth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        alert('Registrado correctamente!');
        console.log('You are Successfully signed up!', res);
      })
      .catch(error => {
        alert('Algo salio mal!');
        console.log('Something is wrong:', error.message);
      });
  }

  /* Sign out */
  public SignOut(): void {
    this.angularFireAuth.signOut();
    this.displayModal = true;
  }

  public getUserData(): Observable<any> {
    return this.userData;
  }
}

