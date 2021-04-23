import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  
  private paisActual: string;

  constructor(
    private http: HttpClient
  ) {
    this.paisActual = 'Argentina';
   }

   public getPaisActual(){
     return this.paisActual;
   }

   public setPaisActual(pais: string){
     this.paisActual = pais;
   }

   public getAllCountries(){
     return this.http.get('https://restcountries.eu/rest/v2/all')
   }
}
