import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public display: boolean;
  public fondo: string;
  public titulo: string;
  public displayInfo: boolean;
  public displayModal: boolean;

  ngOnInit(): void {
    this.displayModal = true;
  }
}

