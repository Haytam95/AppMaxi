import { Component, OnInit } from '@angular/core';
import { DataListService } from '../data-list.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

export interface Data {
  titulo: string;
  content: string;
  id_tipo: string;
  id: string;
}

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  public datas;
  public edit = false;
  public updateInfo;
  public titulo: string;
  public content: string;
  constructor(private route: ActivatedRoute, private datalist: DataListService, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.route.params.subscribe(result => {
      this.datalist.getDataPreview(result.index).subscribe(resolve => {
        this.datas = resolve;
      });
    });
  }

  public borrar(id: string) {
    if (confirm('Estas Seguro?')) {
      this.datalist.deleteData(id);
    }
  }

  public editar(id: string, titulo: string, content: string): void {
    if (confirm('Estas Seguro?')) {
      this.firestore.doc('Datos/' + id).update({ titulo, content });
      alert('Se han editado correctamente los datos!');
    }
  }
}
