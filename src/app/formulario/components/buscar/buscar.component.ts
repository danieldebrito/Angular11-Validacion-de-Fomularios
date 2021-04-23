import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/servicios/servicio-paises.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  constructor(
    private paisesSvc: PaisesService
  ) { }

  traerDatos() {
    console.log(this.paisesSvc.getPaisActual());
    let obs = this.paisesSvc.getAllCountries();
    obs.subscribe(response =>
      console.log(response)
    );
  }

  ngOnInit(): void {
  }

}
