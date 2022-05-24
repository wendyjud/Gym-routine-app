import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
import { HotToastService } from '@ngneat/hot-toast';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class RestriccionesGuard implements CanActivate {
  constructor(private userService: UserService, private router:Router, private toast: HotToastService, private toastr:ToastrService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.userService.currentUser$.pipe(
      map(user=>{
        if (!user){
          //redirigit usuario a log in page
          this.toastr.error('Opps!, Parece que estas intentando acceder a un sitio que requiere autentificación');
          this.toastr.error('Inicia Sesión');
          this.router.navigate(['/inicio-sesion'])
          return false;
        }
        return true;
      })
    );
  }
  
}
