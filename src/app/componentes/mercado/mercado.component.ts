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
  produto: string;
  loading: boolean = true;
  total: number;



  constructor(private mercadoService: MercadoService) { }
  /*Chamo todos os mercados cadastrados*/
  ngOnInit() {
    this.mercadoService.getMercadoList().subscribe(data => {
      this.merc = data;
      this.loading = false;

      /*console.log('>>>>>>>>>>>>>>>>>>>' + JSON.stringify(data));*/
    });
  }
  deletarMercadinho(id: number, index) {
    if (confirm('Deseja mesmo excluir Mercado?')) {
      this.mercadoService.deletarMercado(id).subscribe(data => {
        this.merc.splice(index, 1);
      });
    }
  }
  atualizaPagina() {
    location.reload();
  }
  buscaMercado() {
    if (this.produto === '') {
      this.mercadoService.getMercadoList().subscribe(data => {
        this.merc = data.content;
      });
    } else {
      this.mercadoService.buscaNomeProduto(this.produto).subscribe(data => {
        this.merc = data.content;
      });
    }
  }
  carregaPagina(pagina) {
    this.mercadoService.getUsuarioPage(pagina - 1).subscribe(data => {
      this.merc = data.content;
      this.total = data.totalElements;
    });
  }
  imprimeRelatorio() {
    return this.mercadoService.relatorioDonwload();

  }

}
