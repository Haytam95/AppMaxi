import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DataListService } from '../data-list.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {

  public titulo: string;
  public content: string;
  public selectedLanguaje;
  public langlist;
  public currentId;
  public currentTitulo;
  public currentContent;
  public data;
  constructor(private firestore: AngularFirestore, private datalist: DataListService) { }

  ngOnInit(): void {
    this.datalist.getDataLang().subscribe((resolve) => {
      this.langlist = resolve;
    });
    this.datalist.getCurrentData().subscribe(resolve => {
      this.data = resolve;
    });
  }

  public cargar(): void {
    console.log(this.data, this.datalist.getCurrentData(), "DATA");
    if (confirm('Estas Seguro?')) {
      this.firestore.collection('Datos')
        .add({
          titulo: this.titulo,
          content: this.content,
          id_tipo: this.selectedLanguaje
        });
      alert('Se ha cargado la data correctamente!');
    }
  }
}
