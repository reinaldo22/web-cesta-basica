import { Usuario } from './../model/usuario';
import { AppConstants } from './../app-constants';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getUsuarioList(): Observable<any> {

    return this.http.get<any>(AppConstants.baseUsuario);
  }
  getUsuarioPage(pagina): Observable<any> {
    return this.http.get<any>(AppConstants.baseUsuario + 'page/' + pagina);
  }
  deletarUsuario(id: number): Observable<any> {
    return this.http.delete(AppConstants.baseUsuario + id, { responseType: 'text' });
  }
  buscaNome(nomeUser: string): Observable<any> {
    return this.http.get(AppConstants.baseUsuario + 'buscaNomeUser/' + nomeUser);
  }
  salvarUsuario(user): Observable<any> {
    return this.http.post<any>(AppConstants.baseUsuario, user);
  }
  UpdateUsuario(user): Observable<Usuario> {
    return this.http.put<any>(AppConstants.baseUsuario , user, { responseType: 'json' });
  }
  buscaPorId(id): Observable<any> {

    return this.http.get<any>(AppConstants.baseUsuario + 'buscaId/' + id);
  }

  userAutenticado() {
    if (localStorage.getItem('token') != null && localStorage.getItem('token').toString().trim() != null) {
      return true;
    } else {
      return false;
    }
  }
}
