import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HTTP_INTERCEPTORS, HttpClientModule, HttpErrorResponse, HttpEvent, HttpResponse } from '@angular/common/http';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next) {
    let authService = this.injector.get(LoginService);
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getToken()}`
      }
    });
    return next.handle(tokenizedReq);
  }
}
