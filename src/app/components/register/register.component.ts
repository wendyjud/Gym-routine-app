import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

export function passwordMatchValidator():ValidatorFn{
  return (control:AbstractControl):ValidationErrors | null =>{
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if (password && confirmPassword && password !==confirmPassword){
      return{
        passwordsDonMatch: true
      }
    }
    return null;
  };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signUpForm = new FormGroup ({ 
    name: new FormControl ('', Validators.required),
    email: new FormControl ('',[Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
    confirmPassword:new FormControl('', Validators.required)
  },
  {validators: passwordMatchValidator()}
  );

  constructor(private userService: UserService,private toast: HotToastService, private router: Router ) { }

  ngOnInit():void{}

  get name(){
    return this.signUpForm.get('name');
  }
  get email(){
    return this.signUpForm.get('email');
  }
  get password(){
    return this.signUpForm.get('password');
  }
  get confirmPassword(){
    return this.signUpForm.get('confirmPassword');
  }
  submit(){
    if(this.signUpForm.valid) return;
    const{name, email, password}=this.signUpForm.value;
    this.userService.signUp(name, email, password).pipe(
      this.toast.observe({
          success:'Has ingresado correctamente',
          loading: 'Iniciando sesion',
          error:(err)=>`${err?.message}`
      })
    ).subscribe(()=>{
      this.router.navigate(['/blog']);
    })
  }

}
