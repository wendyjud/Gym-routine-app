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
import { VerRutinasComponent } from './components/ver-rutinas/ver-rutinas.component';
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
    VerRutinasComponent,
    ListarRutinasComponent
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
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      {path:'', pathMatch:'full', component:HomeComponent},
      { path: 'rutinas', component: RutinasComponent },
      { path: 'ejercicios', component: EjerciciosComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'inicio-sesion', component: IniciarSesionComponent },
      { path: 'crear-rutina', component:CrearRutinaComponent},
      { path: 'listar-rutinas', component: ListarRutinasComponent},
      
    ]),
    /*provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    provideStorage(() => getStorage()) *///, provideFirebaseApp(() => initializeApp(environment.firebase)), provideAuth(() => getAuth()), provideDatabase(() => getDatabase()), provideFirestore(() => getFirestore()), providePerformance(() => getPerformance()), provideRemoteConfig(() => getRemoteConfig())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
