import { Component, OnInit } from '@angular/core';
import { DataListService } from '../data-list.service';
import { AuthenticationService } from '../authentication.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public title: string;
  public titulo: string;
  public display: boolean;
  public displayAdd: boolean;
  public displayInfo: boolean;
  public displayProfile: boolean;
  public langlist;
  public data;
  public email = '';
  public userData: Observable<firebase.User>;

  constructor(private datalist: DataListService, private authenticationService: AuthenticationService,
    private auth: AngularFireAuth
  ) {}

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

  public logOut(): void {
    if (confirm('Estas Seguro?')) {
      this.authenticationService.SignOut();
    }
  }

}
