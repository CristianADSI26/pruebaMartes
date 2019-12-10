import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Inspeccion } from '../models/inspeccion';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GestionInspeccionService {
  formularioRegistroInspeccion: FormGroup;
  
  readonly rootURL = 'http://localhost:50557/api';
  inspeccion: Inspeccion;
  listaInspeccion: Inspeccion[];
  filtroInspeccion:"";

  constructor(private http: HttpClient) { }

  guardarInspeccion() {
    if (this.inspeccion.IdInspeccion==null) {
      this.inspeccion.IdInspeccion=0;
    }
    console.log(this.inspeccion);
    return this.http.post(this.rootURL + '/Inspeccion', this.inspeccion)
  }

  refrescarListaInspeccion() {
    this.http.get(this.rootURL + '/Inspeccion')
      .toPromise()
      .then(res => this.listaInspeccion = res as Inspeccion[])
  }

  editarInspeccion() {
  return this.http.put(this.rootURL + '/Inspeccion/' + this.inspeccion.IdInspeccion, this.inspeccion)
  }

  eliminarInspeccion(id) {
  return this.http.delete(this.rootURL + '/Inspeccion/' + id)
  }
}
