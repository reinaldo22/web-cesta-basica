import { AppConstants } from './../app-constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MercadoService {

  constructor(private http: HttpClient) { }

  /*Pega toda a lista de mercados*/
  getMercadoList(): Observable<any> {


    return this.http.get<any>(AppConstants.baseUrl);
  }

  deletarMercado(id: number): Observable<any> {
    return this.http.delete(AppConstants.baseUrl + id, { responseType: 'text' });
  }
  buscaNomeProduto(produto: string): Observable<any> {

    return this.http.get(AppConstants.baseUrl + 'buscaNome/' + produto);

  }
  getUsuarioPage(pagina): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl + 'page/' + pagina);
  }
  relatorioDonwload(){

    return this.http.get(AppConstants.baseUrl + 'relatorio', {responseType:'text'}).subscribe(data =>{
      document.querySelector('iframe').src = data;
    });

  }

}
