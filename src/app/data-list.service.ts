import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

export interface Data {
  titulo: string,
  content: string,
}

@Injectable({
  providedIn: 'root'
})
export class DataListService{
  
  public data: Data[]=[]

  constructor(private firestore: AngularFirestore) {}

   public getData(): Data[]{
    this.firestore.collection<Data>('Angular').valueChanges();
    return 
  }
}





 /* .subscribe((result) => {
    this.data = result
  }) */




/*   <p>{{data?.titulo}}</p> */


/* 
  *ngFor="let data of algo"  */