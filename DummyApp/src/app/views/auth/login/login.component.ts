import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NonNullAssert } from '@angular/compiler';

class Login {
  user: string;
  password: string;

  constructor(user= '', password= '') {
    this.user = user;
    this.password = password;
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: Login = new Login();

  constructor(private authService: AuthService) {
   }

  onSubmit(e) {
    console.log(this.myForm);
  }

  ngOnInit() {
  }

  autentication() {
    this.authService.getAccess(this.myForm.user, this.myForm.password);
  }

}