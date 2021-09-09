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
import { AngularFireAuthModule } from '@angular/fire/auth';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ScrollPanelModule } from 'primeng/scrollpanel';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AngularComponent } from './angular/angular.component';
import { JavaComponent } from './java/java.component';
import { ReactnativeComponent } from './reactnative/reactnative.component';
import { DatabaseComponent } from './database/database.component';
import { FormsModule } from '@angular/forms';
import { CargaComponent } from './carga/carga.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
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
    DatabaseComponent,
    CargaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CardModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    DialogModule,
    ScrollPanelModule,
    InputTextareaModule,
    ToastModule,
    PasswordModule,
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
