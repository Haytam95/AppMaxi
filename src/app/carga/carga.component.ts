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
  public languajes = ['Angular', 'Java', 'ReactNative', 'DataBase'];
  public selectedLanguaje = '';
  constructor(private firestore: AngularFirestore) {}

  ngOnInit(): void {}

  public cargar(): void {
    this.firestore.collection(this.selectedLanguaje)
      .doc(this.titulo)
      .set({
        titulo: this.titulo,
        content: this.content
      });
    alert('Se ha cargado la info');
  }


}
