import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Data {
  titulo: string;
  content: string;
  id_tipo: string;
}

export interface Lang {
  nombre: string;
  id: string;
}

@Injectable({
  providedIn: 'root'
})

export class DataListService {
  public data;

  constructor(private firestore: AngularFirestore) { }

  public getDataLang(): Observable<Lang[]> {
    return this.firestore.collection<Lang>('Tipo').valueChanges({idField: "id"});
  }

  public getDataIndex(id_tipo: string): Observable<Data[]> {
    return this.firestore.collection<Data>('Datos',ref => ref.where("id_tipo","==",id_tipo)).valueChanges();
  }
}
