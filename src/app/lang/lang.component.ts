import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataListService } from '../data-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.css'],
})
export class LangComponent implements OnInit {

  public datas;
  public currentTitle = '';
  public currentContent = '';
  public currentId: string;
  public currentIdTipo: string;
  public buttons = false;
  public exist = false;
  public updateInfo;
  public currentData = {};
  public displayInfo: boolean;
  constructor(private route: ActivatedRoute, private datalist: DataListService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(result => {
      this.datalist.getDataIndex(result.index).subscribe(resolve => {
        this.datas = resolve;
      });
    });
  }

  public showInfo(id, title, content, idTipo): void {
    this.currentId = id;
    this.currentTitle = title;
    this.currentContent = content;
    this.currentIdTipo = idTipo;
    this.currentData = { id, title, content, idTipo };
    this.buttons = true;
    this.exist = true;
  }

  public setButton(): void {
    this.exist = false;
    this.buttons = false;
    this.currentData = {};
    this.currentId = '';
    this.currentTitle = '';
    this.currentContent = '';
  }

  public borrar(): void {
    if (confirm('Estas Seguro?')) {
      this.datalist.deleteData(this.currentId);
      this.setButton();
      this.router.navigateByUrl('/content/' + this.currentIdTipo);
    }
  }

}
