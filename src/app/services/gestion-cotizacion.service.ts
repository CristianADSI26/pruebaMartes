import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Cotizacion } from '../models/cotizacion';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GestionCotizacionService {
  formularioRegistroCotizacion: FormGroup;
  

  readonly rootURL = 'http://localhost:50557/api';
  
  cotizacion: Cotizacion;
  listaCotizacion: Cotizacion[];
  filtroCotizacion:"";

    
  constructor(private http: HttpClient) { }


  guardarCotizacion() {
    if (this.cotizacion.IdCotizacion==null) {
      this.cotizacion.IdCotizacion=0;
    }
    console.log(this.cotizacion);
    return this.http.post(this.rootURL + '/Cotizacion', this.cotizacion)
  }

  refrescarListaCotizacion() {
    this.http.get(this.rootURL + '/Cotizacion')
      .toPromise()
      .then(res => this.listaCotizacion = res as Cotizacion[])
  }

  editarCotizacion() {
  return this.http.put(this.rootURL + '/Cotizacion/' + this.cotizacion.IdCotizacion, this.cotizacion)
  }

  eliminarCotizacion(id) {
  return this.http.delete(this.rootURL + '/Cotizacion/' + id)
  }
}

