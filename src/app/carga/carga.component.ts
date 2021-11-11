import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DataListService } from '../data-list.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthenticationService } from '../authentication.service';

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
  public uploadPercent: Observable<number>;
  public downloadURL: Observable<string | null>;
  public email;

  @Input() public data;
  @Input() public exist;
  constructor(
    private auth: AngularFireAuth, private firestore: AngularFirestore, private datalist: DataListService,
    private router: Router, private storage: AngularFireStorage,
  ) {
   }

  ngOnInit(): void {
    const observer = this.auth.user.subscribe((user) => {
      this.email = user.email;
      this.datalist.getDataLang(this.email).subscribe((resolve) => {
        this.langlist = resolve;
      });
    }, () => {
    }, () => {
      observer.unsubscribe();
    });
  }

  public cargar(title, cont, idTipo): void {
    if (confirm('Estas Seguro?')) {
      this.firestore.collection('Datos')
        .add({
          titulo: title,
          content: cont,
          id_tipo: idTipo,
          photo: this.data.photo
        });
      alert('Se ha cargado la data correctamente!');
    }
  }

  public editar(id, title, cont, idTipo): void {
    if (confirm('Estas Seguro?')) {
      this.firestore.doc('Datos/' + id).update({
        titulo: title,
        content: cont,
        id_tipo: idTipo,
        photo: this.data.photo
      });
      this.reloadPage();
      alert('Se han editado correctamente los datos!');
    }
  }

  public uploadHandler(event): void {
    const observer = this.auth.user.subscribe((user) => {
      const file = event.target.files[0];
      const dateNow = Date.now();
      const filePath = user.email + '/' + dateNow;
      const fileRef = this.storage.ref(filePath);
      const uploadTask = this.storage.upload(filePath, file);
      this.uploadPercent = uploadTask.percentageChanges();
      const observer2 = uploadTask.snapshotChanges().subscribe(() => {
      }, () => {
      }, () => {
        observer2.unsubscribe();
        const observer3 = fileRef.getDownloadURL().subscribe(data => {
          this.data.photo = data;
        });
      });
    }, () => {
    }, () => {
      observer.unsubscribe();
    });
  }

  public reloadPage(): void {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
