import { Roles } from './../../../model/role';
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

  roles = new Roles();

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getUsuarioList().subscribe(data => {
      this.usuarios = data.content;
      this.loading = false;
    });
  }

  buscaUsuario() {
    if (this.nomeUser === '') {
      this.usuarioService.getUsuarioList().subscribe(data => {
        this.usuarios = data.content;
      });
    } else {
      this.usuarioService.buscaNome(this.nomeUser).subscribe(data => {
        this.usuarios = data.content;
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

}
