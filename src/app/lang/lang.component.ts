import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataListService } from '../data-list.service';
@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.css']
})
export class LangComponent implements OnInit {

  public datas;
  constructor(private route: ActivatedRoute, private datalist: DataListService) { }

  ngOnInit(): void {
   this.route.params.subscribe(result => {
      this.datalist.getDataIndex(result.index).subscribe(resolve => {
        this.datas = resolve;
      });
    });
  }
}
