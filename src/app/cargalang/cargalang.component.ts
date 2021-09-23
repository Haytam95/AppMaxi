import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-cargalang',
  templateUrl: './cargalang.component.html',
  styleUrls: ['./cargalang.component.css']
})
export class CargalangComponent implements OnInit {

  public lang: string;

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  public cargar(): void {
    this.firestore.collection('Tipo')
      .add({
        Nombre: this.lang,
      });
    alert('Se ha cargado la info');
  }
}
