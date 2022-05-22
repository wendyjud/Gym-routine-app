import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { RutinasComponent } from './components/rutinas/rutinas.component';
import { EjerciciosComponent } from './components/ejercicios/ejercicios.component';
import { BlogComponent } from './components/blog/blog.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';


const routes: Routes = [
  //{ path: '', redirectTo: '/rutinas', pathMatch: 'full' },
  { path: 'rutinas', component: RutinasComponent },
  { path: 'ejercicios', component: EjerciciosComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'inicio-sesion', component: IniciarSesionComponent },

  //{ path: '**', redirectTo:'/', pathMatch:'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }