import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  public email: string;
  public password: string;

  signIn() {
    this.authenticationService.SignIn(this.email, this.password);
    console.log(this.email,this.password)
    }

  ngOnInit(): void {
  }

}
