import { Component, OnInit } from '@angular/core';
import { GestionCotizacionService } from 'src/app/services/gestion-cotizacion.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-registrar-cotizacion',
  templateUrl: './registrar-cotizacion.component.html',
  styleUrls: ['./registrar-cotizacion.component.css']
})
export class RegistrarCotizacionComponent implements OnInit {


  get NombreEmpresa() {
    return this.gestioncotizacionservice.formularioRegistroCotizacion.controls["NombreEmpresa"];
  }
  get CC_NIT() {
    return this.gestioncotizacionservice.formularioRegistroCotizacion.controls["CC_NIT"];
  }
  get NumeroTelefono() {
    return this.gestioncotizacionservice.formularioRegistroCotizacion.controls["NumeroTelefono"];
  }
  get ValorProducto() {
    return this.gestioncotizacionservice.formularioRegistroCotizacion.controls["ValorProducto"];
  }
  get NombreProducto() {
    return this.gestioncotizacionservice.formularioRegistroCotizacion.controls["NombreProducto"];
  }
  get Departameto() {
    return this.gestioncotizacionservice.formularioRegistroCotizacion.controls["Departameto"];
  }
  get Municipio() {
    return this.gestioncotizacionservice.formularioRegistroCotizacion.controls["Municipio"];
  }
  get Direccion() {
    return this.gestioncotizacionservice.formularioRegistroCotizacion.controls["Direccion"];
  }
  get NombreAsesor() {
    return this.gestioncotizacionservice.formularioRegistroCotizacion.controls["NombreAsesor"];
  }
  get CorreoAsesor() {
    return this.gestioncotizacionservice.formularioRegistroCotizacion.controls["CorreoAsesor"];
  }

  exRegularLetras: any = "^[a-zA-Z ]*$";
  exRegularCorreo: any = "\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*";
  exRegularNumeros: any = "^[0-9]*$";


  constructor(public gestioncotizacionservice: GestionCotizacionService, private formBuilder: FormBuilder, private toastr: ToastrService) { }


  ngOnInit() {

    this.gestioncotizacionservice.formularioRegistroCotizacion = this.formBuilder.group({

      IdCotizacion: [0],

      NombreEmpresa: ["", [Validators.required, Validators.pattern(this.exRegularLetras)]],
      CC_NIT: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(11), Validators.pattern(this.exRegularNumeros)]],
      NumeroTelefono: ["", [Validators.required, Validators.minLength(7), Validators.maxLength(15), Validators.pattern(this.exRegularNumeros)]],
      ValorProducto: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(15), Validators.pattern(this.exRegularNumeros)]],
      NombreProducto: ["", [Validators.required, Validators.pattern(this.exRegularLetras)]],
      Departameto: ["", [Validators.required, Validators.pattern(this.exRegularLetras)]],
      Municipio: ["", [Validators.required, Validators.pattern(this.exRegularLetras)]],
      Direccion: ["", [Validators.required, Validators.maxLength(60)]],
      NombreAsesor: ["", [Validators.required, Validators.pattern(this.exRegularLetras)]],
      CorreoAsesor: ["", [Validators.required, Validators.maxLength(40), Validators.pattern(this.exRegularCorreo)]],
      Comentarios: [""],
    });

  }

  onSubmit() {

    this.gestioncotizacionservice.cotizacion = this.gestioncotizacionservice.formularioRegistroCotizacion.value;
    this.gestioncotizacionservice.guardarCotizacion().subscribe(
    )
    if (this.gestioncotizacionservice.cotizacion.IdCotizacion == 0) {
      this.guardarCotizacion();
    } else {
      this.editarCotizacion();
    }
  }



  guardarCotizacion() {

    this.gestioncotizacionservice.guardarCotizacion().subscribe(
      res => {
        this.gestioncotizacionservice.formularioRegistroCotizacion.reset();
        this.toastr.success("Se registró la Cotización", "Registro de Cotización");
        this.gestioncotizacionservice.refrescarListaCotizacion();
      },
      err => {
        console.log(err);
      }
    )
  }


  editarCotizacion() {

    this.gestioncotizacionservice.editarCotizacion().subscribe(
      res => {
        this.gestioncotizacionservice.formularioRegistroCotizacion.reset();
        this.toastr.info("Se actualizó la Cotización", "Cotización");
        this.gestioncotizacionservice.refrescarListaCotizacion();
      },
      err => {
        console.log(err);
      }
    )
  }


}





