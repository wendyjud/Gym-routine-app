import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule}from '@angular/forms';


//Angular
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


//componentes creados
import { RutinasComponent } from './components/rutinas/rutinas.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EjerciciosComponent } from './components/ejercicios/ejercicios.component';
import { BlogComponent } from './components/blog/blog.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { HomeComponent } from './components/home/home.component';


import { RouterModule } from '@angular/router';
import { CrearRutinaComponent } from './components/crear-rutina/crear-rutina.component';

import { ListarRutinasComponent } from './components/listar-rutinas/listar-rutinas.component';
//import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { provideStorage,getStorage } from '@angular/fire/storage';

import { QuemagrasaComponent } from './components/rutinas/rutinas_rapidas/quemagrasa/quemagrasa.component';
import { PiernaYGlueteoComponent } from './components/rutinas/rutinas_rapidas/pierna-y-glueteo/pierna-y-glueteo.component';
import { CardioEnCasaComponent } from './components/rutinas/rutinas_rapidas/cardio-en-casa/cardio-en-casa.component';
import { AbdominalesComponent } from './components/rutinas/rutinas_rapidas/abdominales/abdominales.component';
import { CinturaComponent } from './components/rutinas/rutinas_rapidas/cintura/cintura.component';
import { RetosComponent } from './components/rutinas/retos/retos.component';
import { PectoralesComponent } from './components/ejercicios/pectorales/pectorales.component';
import { RegisterComponent } from './components/register/register.component';
import { HotToastModule } from '@ngneat/hot-toast';



@NgModule({
  declarations: [
    AppComponent,
    RutinasComponent,
    NavbarComponent,
    EjerciciosComponent,
    BlogComponent,
    IniciarSesionComponent,
    HomeComponent,
    CrearRutinaComponent,
   
    ListarRutinasComponent,
         QuemagrasaComponent,
         PiernaYGlueteoComponent,
         CardioEnCasaComponent,
         AbdominalesComponent,
         CinturaComponent,
         RetosComponent,
         PectoralesComponent,
         RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,

    HotToastModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      {path:'home', component:HomeComponent},
      { path: 'rutinas', component: RutinasComponent },
      { path: 'ejercicios', component: EjerciciosComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'inicio-sesion', component: IniciarSesionComponent },
      { path: 'register', component:RegisterComponent},
      
      { path: 'crear-rutina', component:CrearRutinaComponent},
      { path: 'listar-rutinas', component: ListarRutinasComponent},

      { path: 'quemagrasa', component: QuemagrasaComponent},
      { path: 'pierna-y-gluteo', component:PiernaYGlueteoComponent},
      { path: 'cardio-en-casa', component:CardioEnCasaComponent},
      { path: 'abdominales', component:AbdominalesComponent},
      
      {path: 'retos', component:RetosComponent},

      {path: 'pectorales', component:PectoralesComponent}
      
    ]),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    HotToastModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
