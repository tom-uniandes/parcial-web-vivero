import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { PlantaService } from '../planta.service';

@Component({
  selector: 'app-planta-list',
  templateUrl: './planta-list.component.html',
  styleUrls: ['./planta-list.component.css']
})
export class PlantaListComponent implements OnInit {

  plantas: Array<Planta> = [];
  totalInterior: any;
  totalExterior: any;

  constructor(private plantaService: PlantaService) { }

  getPlantas(): void {
    this.plantaService.getPlantas().subscribe((plantas) => {
      this.plantas = plantas;
      this.getCantidadPlantasTipo();
    });
  }

  getCantidadPlantasTipo(): void {
    let totalPlantas;
    totalPlantas = this.plantas.length;

    let totalInterior = 0;
    let totalExterior = 0;

    for(let contador = 0; totalPlantas>contador; contador++) {
      let tipo = this.plantas[contador].tipo;
      if(tipo == "Interior") {
        totalInterior += 1;
      } else if (tipo == "Exterior"){
        totalExterior += 1;
      }
    }

    this.totalInterior = totalInterior;
    this.totalExterior = totalExterior;
  }

  ngOnInit() {
    this.getPlantas();
  }

}
