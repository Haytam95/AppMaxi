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
    const index = this.route.snapshot.params.index;
    this.datas = this.datalist.getDataIndex(index);
  }

}
