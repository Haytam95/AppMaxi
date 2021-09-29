import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

export interface Data {
  titulo: string;
  content: string;
  id_tipo: string;
  id: string;
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

  constructor(private firestore: AngularFirestore, private router: Router) { }

  public getDataLang(): Observable<Lang[]> {
    return this.firestore.collection<Lang>('Tipo').valueChanges({ idField: 'id' });
  }

  public getDataIndex(id_tipo: string): Observable<Data[]> {
    return this.firestore.collection<Data>('Datos', ref => ref.where('id_tipo', '==', id_tipo)).valueChanges({ idField: 'id' });
  }

  public getDataPreview(id_tipo: string): Observable<Data[]> {
    return this.firestore.collection<Data>('Datos', ref => ref.where('__name__', '==', id_tipo)).valueChanges({ idField: 'id' });
  }

  public deleteData(id: string) {
    this.firestore.doc('Datos/' + id).delete();
    this.router.navigateByUrl('content');
  }

}
