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
import { EditorModule } from 'primeng/editor';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CargaComponent } from './carga/carga.component';
import { LangComponent } from './lang/lang.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { ContentComponent } from './content/content.component';
import { CargalangComponent } from './cargalang/cargalang.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'content', component: ContentComponent, canActivate: [AuthGuardGuard] },
  { path: 'content/:index', component: LangComponent, canActivate: [AuthGuardGuard] },
  { path: 'register' , component: RegisterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CargaComponent,
    LangComponent,
    ContentComponent,
    CargalangComponent,
    RegisterComponent,
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
    EditorModule,
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
