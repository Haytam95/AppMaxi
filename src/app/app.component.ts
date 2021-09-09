import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public display: boolean;
  public fondo = 'https://p4.wallpaperbetter.com/wallpaper/259/963/669/quentin-bouilloud-artwork-digital-art-japan-feudal-japan-hd-wallpaper-preview.jpg';
  public titulo: string;
  public displayInfo: boolean;

  ngOnInit(): void { }
}

