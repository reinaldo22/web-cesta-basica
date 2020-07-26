import { HeaderInterceptorService } from './service/header-interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { HomeComponent } from './home/home.component';
import { MercadoComponent } from './componentes/mercado/mercado.component';
import { GuardiaoGuard } from './service/guardiao.guard';
import { AddUsuarioComponent } from './componentes/usuarios/add-usuario/add-usuario.component';
import { UsuarioComponent } from './componentes/usuarios/usuario/usuario.component';

export const appRouters: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [GuardiaoGuard] },
  { path: 'mercados', component: MercadoComponent, canActivate: [GuardiaoGuard] },
  { path: 'usuarioAdd', component: AddUsuarioComponent, canActivate: [GuardiaoGuard] },
  { path: 'usuarioAdd/:id', component: AddUsuarioComponent, canActivate: [GuardiaoGuard] },
  { path: 'usuario', component: UsuarioComponent, canActivate: [GuardiaoGuard] }
];
export const routes: ModuleWithProviders = RouterModule.forRoot(appRouters);


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MercadoComponent,
    AddUsuarioComponent,
    UsuarioComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routes
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HeaderInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
