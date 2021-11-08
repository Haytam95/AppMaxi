import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DataListService } from '../data-list.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

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
  public photo: string;

  @Input() public data;
  @Input() public exist;
  constructor(
    private firestore: AngularFirestore, private datalist: DataListService, private router: Router, private storage: AngularFireStorage
  ) { }

  ngOnInit(): void {
    this.datalist.getDataLang().subscribe((resolve) => {
      this.langlist = resolve;
    });
  }

  public cargar(title, cont, idTipo): void {
    if (confirm('Estas Seguro?')) {
      this.firestore.collection('Datos')
        .add({
          titulo: title,
          content: cont,
          id_tipo: idTipo,
          photo: this.downloadURL
        });
      alert('Se ha cargado la data correctamente!');
    }
  }

  public editar(id, titulo, content, id_tipo): void {
    if (confirm('Estas Seguro?')) {
      this.firestore.doc('Datos/' + id).update({ titulo, content, id_tipo });
      this.reloadPage();
      alert('Se han editado correctamente los datos!');
    }
  }

  public uploadFile(event): void {
    const file = event.target.files[0];
    const filePath = 'photos/' + this.photo;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(
      finalize(() => this.downloadURL = fileRef.getDownloadURL())
    ).subscribe();
  }

  public reloadPage(): void {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
