import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public titulo: string;
  public display: boolean;
  public displayAdd: boolean;
  public displayInfo: boolean;

  ngOnInit(): void { }
}

