import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/auth/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  username: string = 'defaultUserName'
  password: string = 'help'
  errorMessage: string = 'Invalid Credentials'
  invalidLogin: boolean = true

  constructor(
    private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    // private basicAuthenticationService: BasicAuthenticationService
  ) {}

  ngOnInit() {}

  handleLogin() {
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      this.invalidLogin = false;
      this.router.navigate(['list']) // (['welcome', this.username])
      console.log('invalidLogin = false');
    }
    else{
      this.invalidLogin = true;
    }
  }

  // handleJWTAuthLogin(){
  //   this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password) // Why is this. used?
  //   .subscribe(
  //     data => {
  //       console.log(data)
  //       this.router.navigate(['welcome', this.username])
  //       this.invalidLogin = false
  //     },
  //     error => {
  //       console.log(error)
  //       this.invalidLogin = true;
  //     }
  //   )
  // }

}
