import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-cargalang',
  templateUrl: './cargalang.component.html',
  styleUrls: ['./cargalang.component.css']
})
export class CargalangComponent implements OnInit {

  public lang: string;
  public datauser;

  constructor(private firestore: AngularFirestore, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.authenticationService.getUserData().subscribe((resolve) => {
      this.datauser = resolve;
    });
  }

  public cargar(): void {
    if (confirm('Estas Seguro?')) {
      this.firestore.collection('Tipo')
        .add({
          Nombre: this.lang,
          email: this.datauser.email
        });
      alert('Se ha cargado el lenguaje correctamente!');
    }
  }
}
