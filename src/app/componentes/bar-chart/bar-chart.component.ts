import { Component, OnInit } from '@angular/core';
import { UserChart } from 'src/app/model/grafico';
import { MercadoService } from 'src/app/service/mercado.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  userChart = new UserChart();

  constructor(private mercadoService: MercadoService) { }

  ngOnInit() {

    this.mercadoService.carregaGrafico().subscribe(data => {
      this.userChart = data;

      this.barChartLabels = this.userChart.produto.split(',');


      const precoArray = JSON.parse('[' + this.userChart.preco + ']');

      this.barChartData = [
        { data: precoArray, label: 'Cesta Básica' }
      ];
    });



  }
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];


  barChartData: ChartDataSets[] = [
    { data: [], label: 'Salário Usuário' }
  ];


}
