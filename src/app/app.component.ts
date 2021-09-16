import { Component, OnInit } from '@angular/core';
import { DataListService } from './data-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public title: string;
  public titulo: string;
  public display: boolean;
  public displayAdd: boolean;
  public displayInfo: boolean;
  public langlist;

  constructor(private datalist: DataListService) { }

  ngOnInit(): void {
     this.datalist.getAllData().subscribe((result) => {
      this.langlist = result;
      console.log(this.langlist, 'TestData');
    });
  }
}

