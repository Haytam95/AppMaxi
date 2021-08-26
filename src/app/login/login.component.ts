import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: string;
  public password: string;

  constructor() { }

  ngOnInit(): void {
  }

  public addPeliculaB(): void {
    console.log('En mantenimiento');
  }

}
