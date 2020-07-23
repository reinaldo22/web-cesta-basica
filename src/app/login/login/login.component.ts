import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = { username: '', password: '' };



  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {


  }
  public login() {

    this.loginService.login(this.usuario);

  }
}

