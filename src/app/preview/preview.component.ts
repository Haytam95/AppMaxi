import { Component, OnInit } from '@angular/core';
import { DataListService } from '../data-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  public datas;
  constructor(private route: ActivatedRoute, private datalist: DataListService) { }

  ngOnInit(): void {
    this.route.params.subscribe(result => {
      this.datalist.getDataPreview(result.index).subscribe(resolve => {
        this.datas = resolve;
      });
    });
  }

}
