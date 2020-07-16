import { Usuario } from './../../model/usuario';
import { Component, OnInit } from '@angular/core';
import { MercadoService } from 'src/app/service/mercado.service';
import { Mercado } from 'src/app/model/mercado';


@Component({
  selector: 'app-mercado',
  templateUrl: './mercado.component.html',
  styleUrls: ['./mercado.component.css']
})
export class MercadoComponent implements OnInit {

  merc: Array<Mercado> = new Array();
  nome: string;

  constructor(private mercadoService: MercadoService) { }
  /*Chamo todos os mercados cadastrados*/
  ngOnInit() {
    this.mercadoService.getMercadoList().subscribe(data => {
      this.merc = data;
      /*console.log('>>>>>>>>>>>>>>>>>>>' + JSON.stringify(data));*/
    });
  }
  deletarMercadinho(id: number, index) {
    if (confirm('Deseja mesmo excluir usuário?')) {
      this.mercadoService.deletarMercado(id).subscribe(data => {
        this.merc.splice(index, 1);
      });
    }
  }
}
