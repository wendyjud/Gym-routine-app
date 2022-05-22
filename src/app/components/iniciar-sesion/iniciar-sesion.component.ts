import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  loginForm = new FormGroup({
    email:new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl ('', Validators.required),
  });
  
  constructor( private userService:UserService, private toastr: ToastrService, private router:Router, private toast: HotToastService) { }

  ngOnInit(): void {}
  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }
  submit(){
   if (this.loginForm.valid){
    //this.toastr.info('Información guardada');
    const {email, password}=this.loginForm.value;
    this.userService.login(email, password).pipe(
      this.toast.observe({
        success: 'Logged in successfully',
        loading: 'Logging in...',
        error: ({ message }) => `There was an error: ${message} `
      })
    )
    .subscribe(()=>{
      this.router.navigate(['/crear-rutina']);
    })
   }return;
    //this.toastr.error('Opps!, algo salió mal', 'Inténtalo de nuevo');
  }


}


