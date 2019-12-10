import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Cliente } from '../models/cliente';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GestionClienteService {

  formularioRegistroCliente:FormGroup

  
  readonly rootURL = 'http://localhost:50557/api';
  
 cliente: Cliente;
  listaCliente: Cliente[];
  filtroCliente:"";

    
  constructor(private http: HttpClient) { }


  guardarCliente() {
    if (this.cliente.IdCliente==null) {
      this.cliente.IdCliente=0;
    }
    console.log(this.cliente);
    return this.http.post(this.rootURL + '/Cliente', this.cliente)
  }

  refrescarListaCliente() {
    this.http.get(this.rootURL + '/Cliente')
      .toPromise()
      .then(res => this.listaCliente = res as Cliente[])
  }

  editarCliente() {
  return this.http.put(this.rootURL + '/Cliente/' + this.cliente.IdCliente, this.cliente)
  }

  eliminarCliente(id) {
  return this.http.delete(this.rootURL + '/Cliente/' + id)
  }
}
