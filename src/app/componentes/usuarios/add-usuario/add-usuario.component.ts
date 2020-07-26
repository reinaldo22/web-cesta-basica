import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

  usuario = new Usuario();
  id: number;

  constructor(private routeActive: ActivatedRoute, private usuarioService: UsuarioService) { }

  ngOnInit() {
    const id = this.routeActive.snapshot.paramMap.get('id');

    if (id != null) {
      this.usuarioService.buscaPorId(id).subscribe(data => {
        this.usuario = data;
      });
    }
  }
  public salvar() {

    if (this.usuario.id != null && this.usuario.id.toString().trim() != null) {
      this.usuarioService.UpdateUsuario(this.usuario).subscribe(data => {
        this.novo();

      });
    } else {
      this.usuarioService.salvarUsuario(this.usuario).subscribe(data => {

        this.novo();
        console.log('Usuário salvo com sucesso' + data);
      });
    }

  }
  novo() {
    this.usuario = new Usuario();
  }
}
