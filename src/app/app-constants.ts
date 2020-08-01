export class AppConstants {

  public static get baseServidor(): string {

    return 'https://api-cesta-compras.herokuapp.com/';
  }

  public static get baseLogin(): string {

    return this.baseServidor + 'login';
  }

  public static get baseUrl(): string {

    return this.baseServidor + 'mercado/';
  }
  public static get baseUsuario(): string {

    return this.baseServidor + 'usuario/';
  }
}

