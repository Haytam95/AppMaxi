import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {

  public titulo: string;
  public content: string;
  public idtipo: string;
  public languajes = ['Angular', 'ReactNative', 'DataBase'];
  public selectedLanguaje = '';
  constructor(private firestore: AngularFirestore) {}

  ngOnInit(): void {}

  public cargar(): void {
    this.firestore.collection('Datos')
      .add({
        titulo: this.titulo,
        content: this.content,
        id_tipo: this.idtipo
      });
    alert('Se ha cargado la info');
  }


}
