import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DataListService } from '../data-list.service';
import { Router } from '@angular/router';
import * as Quill from 'quill';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit, AfterViewInit {

  public titulo: string;
  public content: string;
  public selectedLanguaje;
  public langlist;
  public toolbarOptions = [['bold', 'italic'], ['link', 'image']];

  @Input() public data;
  @Input() public exist;
  constructor(private firestore: AngularFirestore, private datalist: DataListService, private router: Router) { }

  ngOnInit(): void {
    this.datalist.getDataLang().subscribe((resolve) => {
      this.langlist = resolve;
    });
  }

  ngAfterViewInit(): void {
    const quill = new Quill('#editor', {
      modules: {
        toolbar: '#toolbar'
      },
      theme: 'snow'
    });
  }

  public cargar(title, cont, idTipo): void {
    if (confirm('Estas Seguro?')) {
      this.firestore.collection('Datos')
        .add({
          titulo: title,
          content: cont,
          id_tipo: idTipo
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

  public onBasicUpload(event): void {
  }

  public testPage(): void {
    console.log('Funciona!');
  }

  public reloadPage(): void {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
