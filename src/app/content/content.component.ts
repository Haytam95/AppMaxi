import { Component, OnInit } from '@angular/core';
import { DataListService } from '../data-list.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public title: string;
  public titulo: string;
  public display: boolean;
  public displayAdd: boolean;
  public displayInfo: boolean;
  public displayProfile: boolean;
  public langlist;

  constructor(private datalist: DataListService) { }

  ngOnInit(): void {
    this.datalist.getDataLang().subscribe((resolve) => {
      this.langlist = resolve;
    });
  }

}
