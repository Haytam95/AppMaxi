import { Component, OnInit } from '@angular/core';
import { DataListService } from '../data-list.service';
import { AuthenticationService } from '../authentication.service';

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
  public datauser;
  public langlist;

  constructor(private datalist: DataListService, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.datalist.getDataLang().subscribe((resolve) => {
      this.langlist = resolve;
    });
    this.authenticationService.getUserData().subscribe((resolve) => {
      this.datauser = resolve;
    });
  }

  public logOut() {
    if (confirm('Estas Seguro?')) {
      this.authenticationService.SignOut();
    }
  }

}
