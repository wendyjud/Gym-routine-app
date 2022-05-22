import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public userService: UserService, private router:Router) { }

  logout(){
    this.userService.logout().subscribe(()=>{
      this.router.navigate(['/iniciar-sesion']);
    });
  }
  ngOnInit(): void {
  }

}
