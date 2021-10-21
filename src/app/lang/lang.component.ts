import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { DataListService } from '../data-list.service';

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.css'],
})
export class LangComponent implements OnInit {

  public datas;
  public currentTitle: string;
  public currentContent: string;
  public currentId: string;
  public buttons = false;
  public updateInfo;
  public displayInfo: boolean;
  constructor(private route: ActivatedRoute, private datalist: DataListService, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.route.params.subscribe(result => {
      this.datalist.getDataIndex(result.index).subscribe(resolve => {
        this.datas = resolve;
      });
    });
  }

  public showInfo(id, title, content) {
    this.currentId = id;
    this.currentTitle = title;
    this.currentContent = content;
    this.buttons = true;
    this.datalist.saveCurrentData({ id: this.currentId, titulo: this.currentTitle, content: this.currentContent });
  }

  public borrar() {
    if (confirm('Estas Seguro?')) {
      this.datalist.deleteData(this.currentId);
    }
  }

  public editar(titulo: string, content: string): void {
    if (confirm('Estas Seguro?')) {
      this.firestore.doc('Datos/' + this.currentId).update({ titulo, content });
      alert('Se han editado correctamente los datos!');
    }
  }
}
