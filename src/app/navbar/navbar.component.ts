import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  public title: string;
  public titulo: string;
  public display: boolean;
  public displayAdd: boolean;
  public displayInfo: boolean;
  public langlist;
  
  constructor() { }

  ngOnInit(): void {
  }

}
