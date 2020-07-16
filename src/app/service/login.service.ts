import { AppConstants } from './../app-constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) { }


  login(usuario) {
    return this.http.post(AppConstants.baseLogin, JSON.stringify(usuario)).subscribe(data => {
      const token = (JSON.parse(JSON.stringify(data)).token.split()[0]);
      console.info(token);
      localStorage.setItem('token', token);
      console.info('token: ' + localStorage.getItem('token'));
      this.router.navigate(['home']);
    },

      error => {
        console.log('Erro ao fazer login');
        alert('Acesso Negado');
      }
    );
  }
  userAutenticado() {
    if (localStorage.getItem('token') != null && localStorage.getItem('token').toString().trim() != null) {
      return true;
    } else {
      return false;
    }
  }
  getToken() {
    return localStorage.getItem('token');
  }
}
