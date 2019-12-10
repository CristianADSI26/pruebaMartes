import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionCotizacionComponent } from './components/gestion-cotizacion/gestion-cotizacion.component';
import { RegistrarCotizacionComponent } from './components/gestion-cotizacion/registrar-cotizacion/registrar-cotizacion.component';
import { ListarCotizacionComponent } from './components/gestion-cotizacion/listar-cotizacion/listar-cotizacion.component';

import { GestionClienteComponent } from './components/gestion-cliente/gestion-cliente.component';
import { RegistrarClienteComponent } from './components/gestion-cliente/registrar-cliente/registrar-cliente.component';
import { ListarClienteComponent } from './components/gestion-cliente/listar-cliente/listar-cliente.component';
import { GestionUsuarioComponent } from './components/gestion-usuario/gestion-usuario.component';
import { RegistrarUsuarioComponent } from './components/gestion-usuario/registrar-usuario/registrar-usuario.component';

import{FormsModule, ReactiveFormsModule} from "@angular/forms";
import { GestionCotizacionService } from './services/gestion-cotizacion.service';
import { LoguinComponent } from './components/gestion-usuario/loguin/loguin.component';
import{HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { GestionClienteService } from './services/gestion-cliente.service';
import { ToastrModule } from 'ngx-toastr';
import { FiltroCotizacionPipe } from './pipes/filtro-cotizacion.pipe';
import { GestionInspeccionComponent } from './components/gestion-inspeccion/gestion-inspeccion.component';
import { RegistrarInspeccionComponent } from './components/gestion-inspeccion/registrar-inspeccion/registrar-inspeccion.component';
import { ListarInspeccionComponent } from './components/gestion-inspeccion/listar-inspeccion/listar-inspeccion.component';
import { FiltroInspeccionPipe } from './pipes/filtro-inspeccion.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GestionCotizacionComponent,
    RegistrarCotizacionComponent,
    ListarCotizacionComponent,
    
    GestionClienteComponent,
    RegistrarClienteComponent,
    ListarClienteComponent,
    GestionUsuarioComponent,
    RegistrarUsuarioComponent,
    LoguinComponent,
    FiltroCotizacionPipe,
    GestionInspeccionComponent,
    RegistrarInspeccionComponent,
    ListarInspeccionComponent,
    FiltroInspeccionPipe,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added


  ],
  providers: [GestionClienteService],

  bootstrap: [AppComponent]
})
export class AppModule { }
