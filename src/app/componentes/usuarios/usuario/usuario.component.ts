import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: Array<Usuario> = new Array();
  loading: boolean = true;
  nomeUser: string;
  total: number;



  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getUsuarioList().subscribe(data => {
      this.usuarios = data.content;
      this.loading = false;
      this.total = data.totalElements;
    });
  }

  buscaUsuario() {
    if (this.nomeUser === '') {
      this.usuarioService.getUsuarioList().subscribe(data => {
        this.usuarios = data.content;
        this.total = data.totalElements;
      });
    } else {
      this.usuarioService.buscaNome(this.nomeUser).subscribe(data => {
        this.usuarios = data.content;
        this.total = data.totalElements;
      });
    }
  }
  deletUser(id: number, index) {
    if (confirm('Deseja mesmo excluir Usuário?')) {
      this.usuarioService.deletarUsuario(id).subscribe(data => {
        this.usuarios.splice(index, 1);
      });
    }
  }

  carregaPagina(pagina) {
    this.usuarioService.getUsuarioPage(pagina - 1).subscribe(data => {
      this.usuarios = data.content;
      this.total = data.totalElements;
    });
  }

}
