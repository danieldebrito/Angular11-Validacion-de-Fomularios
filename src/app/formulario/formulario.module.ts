import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioRoutingModule } from './formulario-routing.module';
import { FormularioComponent } from './formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuscarComponent } from './components/buscar/buscar.component';
import { HttpClientModule } from '@angular/common/http';
import { PaisesService } from '../servicios/servicio-paises.service';

@NgModule({
  declarations: [
    FormularioComponent,
    BuscarComponent
  ],
  imports: [
    CommonModule,
    FormularioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PaisesService],
})
export class FormularioModule { }
