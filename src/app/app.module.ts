import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { DialogModule } from 'primeng/dialog';
import { AngularFireAuthModule } from "@angular/fire/auth";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AngularComponent } from './angular/angular.component';
import { JavaComponent } from './java/java.component';
import { ReactnativeComponent } from './reactnative/reactnative.component';
import { DatabaseComponent } from './database/database.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: '/language/angular', pathMatch: 'full' },
  { path: 'language/angular', component: AngularComponent },
  { path: 'language/java', component: JavaComponent },
  { path: 'language/reactnative', component: ReactnativeComponent },
  { path: 'language/database', component: DatabaseComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AngularComponent,
    JavaComponent,
    ReactnativeComponent,
    DatabaseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CardModule,
    ButtonModule,
    FormsModule,
    DialogModule,
    SidebarModule,
    AngularFireAuthModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
