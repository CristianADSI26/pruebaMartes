import { Component, OnInit } from '@angular/core';
import { GestionInspeccionService } from 'src/app/services/gestion-inspeccion.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-registrar-inspeccion',
    templateUrl: './registrar-inspeccion.component.html',
    styleUrls: ['./registrar-inspeccion.component.css']
})
export class RegistrarInspeccionComponent implements OnInit {

    get Nombre() {
        return this.gestionInspeccionService.formularioRegistroInspeccion.controls["Nombre"];
    }
    get Apellido() {
        return this.gestionInspeccionService.formularioRegistroInspeccion.controls["Apellido"];
    }
    get DocumentoIdentificacion() {
        return this.gestionInspeccionService.formularioRegistroInspeccion.controls["DocumentoIdentificacion"];
    }
    get Telefono() {
        return this.gestionInspeccionService.formularioRegistroInspeccion.controls["Telefono"];
    }
    get Direccion() {
        return this.gestionInspeccionService.formularioRegistroInspeccion.controls["Direccion"];
    }
    get Municipio() {
        return this.gestionInspeccionService.formularioRegistroInspeccion.controls["Municipio"];
    }
    get Producto() {
        return this.gestionInspeccionService.formularioRegistroInspeccion.controls["Producto"];
    }
    get PlantaElectrica() {
        return this.gestionInspeccionService.formularioRegistroInspeccion.controls["PlantaElectrica"];
    }
    get TipoVehiculo() {
        return this.gestionInspeccionService.formularioRegistroInspeccion.controls["TipoVehiculo"];
    }
    get CondicionesTerreno() {
        return this.gestionInspeccionService.formularioRegistroInspeccion.controls["CondicionesTerreno"];
    }
    get ConexionesElectricas() {
        return this.gestionInspeccionService.formularioRegistroInspeccion.controls["ConexionesElectricas"];
    }
    get TecnicoRequerido() {
        return this.gestionInspeccionService.formularioRegistroInspeccion.controls["TecnicoRequerido"];
    }
    get HerramientasEquipos() {
        return this.gestionInspeccionService.formularioRegistroInspeccion.controls["HerramientasEquipos"];
    }
    get Largo() {
        return this.gestionInspeccionService.formularioRegistroInspeccion.controls["Largo"];
    }
    get Ancho() {
        return this.gestionInspeccionService.formularioRegistroInspeccion.controls["Ancho"];
    }
    get Fondo() {
        return this.gestionInspeccionService.formularioRegistroInspeccion.controls["Fondo"];
    }
    get Diametro() {
        return this.gestionInspeccionService.formularioRegistroInspeccion.controls["Diametro"];
    }
    get Capacidad() {
        return this.gestionInspeccionService.formularioRegistroInspeccion.controls["Capacidad"];
    }
    get Material() {
        return this.gestionInspeccionService.formularioRegistroInspeccion.controls["Material"];
    }
    get Cantidad() {
        return this.gestionInspeccionService.formularioRegistroInspeccion.controls["Cantidad"];
    }
    get TecnicoRealizaInspeccion() {
        return this.gestionInspeccionService.formularioRegistroInspeccion.controls["TecnicoRealizaInspeccion"];
    }
    get PersonaAcompanaInspeccion() {
        return this.gestionInspeccionService.formularioRegistroInspeccion.controls["PersonaAcompanaInspeccion"];
    }
    get Observaciones() {
        return this.gestionInspeccionService.formularioRegistroInspeccion.controls["Observaciones"];
    }

    exRegularLetras: any = "^[a-zA-Z ]*$";
    exRegularCorreo: any = "\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*";
    exRegularNumeros: any = "^[0-9]*$";

    constructor(public gestionInspeccionService: GestionInspeccionService, private formBuilder: FormBuilder, private toastr: ToastrService) { }

    ngOnInit() {

        this.gestionInspeccionService.formularioRegistroInspeccion = this.formBuilder.group({
            IdInspeccion: [0],
            Nombre: ["", [Validators.required, Validators.pattern(this.exRegularLetras)]],
            Apellido: ["", [Validators.required, Validators.pattern(this.exRegularLetras)]],
            DocumentoIdentificacion: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(15), Validators.pattern(this.exRegularNumeros)]],
            Telefono: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(15), Validators.pattern(this.exRegularNumeros)]],
            Direccion: ["", [Validators.required, Validators.maxLength(20)]],
            Municipio: ["", [Validators.required, Validators.pattern(this.exRegularLetras)]],
            Producto: ["", [Validators.required, Validators.pattern(this.exRegularLetras)]],
            PlantaElectrica: ["", [Validators.required, Validators.pattern(this.exRegularLetras)]],
            TipoVehiculo: ["", [Validators.required, Validators.pattern(this.exRegularLetras)]],
            CondicionesTerreno: ["", [Validators.required, Validators.pattern(this.exRegularLetras)]],
            ConexionesElectricas: ["", [Validators.required, Validators.pattern(this.exRegularLetras)]],
            TecnicoRequerido: ["", [Validators.required, Validators.pattern(this.exRegularLetras)]],
            HerramientasEquipos: ["", [Validators.required, Validators.pattern(this.exRegularLetras)]],
            Largo: ["", [Validators.required, Validators.maxLength(10), Validators.pattern(this.exRegularNumeros)]],
            Ancho: ["", [Validators.required, Validators.maxLength(10), Validators.pattern(this.exRegularNumeros)]],
            Fondo: ["", [Validators.required, Validators.maxLength(10), Validators.pattern(this.exRegularNumeros)]],
            Diametro: ["", [Validators.required, Validators.maxLength(10), Validators.pattern(this.exRegularNumeros)]],
            Capacidad: ["", [Validators.required, Validators.maxLength(10), Validators.pattern(this.exRegularNumeros)]],
            Material: ["", [Validators.required, Validators.pattern(this.exRegularLetras)]],
            Cantidad: ["", [Validators.required, Validators.maxLength(10), Validators.pattern(this.exRegularNumeros)]],
            TecnicoRealizaInspeccion: ["", [Validators.required, Validators.pattern(this.exRegularLetras)]],
            PersonaAcompanaInspeccion: ["", [Validators.required, Validators.pattern(this.exRegularLetras)]],
            Observaciones: ["", [Validators.required]]
        })

    }
    onSubmit() {
        this.gestionInspeccionService.inspeccion = this.gestionInspeccionService.formularioRegistroInspeccion.value;
        this.gestionInspeccionService.guardarInspeccion().subscribe(
        )
        if (this.gestionInspeccionService.inspeccion.IdInspeccion==0) {
            this.guardarInspeccion();
        } else {
            this.editarInspeccion();
        }

    }
    guardarInspeccion() {
        this.gestionInspeccionService.guardarInspeccion().subscribe(
            res => {
                this.gestionInspeccionService.formularioRegistroInspeccion.reset();
                this.toastr.success("Se registró la Inspección", "Registro de Inspección");
                this.gestionInspeccionService.refrescarListaInspeccion();
            },
            err => {
                console.log(err);
            }
        )
    }
    editarInspeccion() {
        this.gestionInspeccionService.editarInspeccion().subscribe(
            res => {
                this.gestionInspeccionService.formularioRegistroInspeccion.reset();
                this.toastr.info("Se actualizó la Inspección", "Inspección");
                this.gestionInspeccionService.refrescarListaInspeccion();
            },
            err => {
                console.log(err);
            }
        )

    }

}




