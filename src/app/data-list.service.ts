import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Data {
  titulo: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})

export class DataListService {
  public data: Data[] = [];

  constructor(private firestore: AngularFirestore) { }

  public getAllData(): any{
    // Aca deberia devolver los lenguajes //
    return this.firestore.collection('').valueChanges();
  }

  public getDataAngular(): Observable<Data[]> {
    return this.firestore.collection<Data>('Angular').valueChanges();
  }

  public getDataIndex(index: number = 0): Data {
    // Aca tendria que devolver la data de firebase pero en base al documento que se este mostrando //
    return this.data[index];
  }
}
