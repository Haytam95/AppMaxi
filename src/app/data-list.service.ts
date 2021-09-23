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
}

@Injectable({
  providedIn: 'root'
})

export class DataListService {
  public data;

  constructor(private firestore: AngularFirestore) { }

  public getDataLang(): Observable<Lang[]> {
    return this.firestore.collection<Lang>('Tipo').valueChanges();
  }

  public getAllData(index: number = 0): Observable<Data[]> {
    this.data = this.firestore.collection<Data>('Datos').valueChanges();
    return this.data[index];
  }

  public getDataIndex(index: number = 0): Data {
    this.data = this.firestore.collection<Data>('Datos').valueChanges();
    return this.data[index];
  }
}
