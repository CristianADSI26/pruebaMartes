import { Component, OnInit } from '@angular/core';
import { GestionClienteService } from 'src/app/services/gestion-cliente.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})
export class RegistrarClienteComponent implements OnInit {

  get PrimerNombre(){
    return this.gestionClienteService.formularioRegistroCliente.controls["PrimerNombre"]
  }
  get SegundoNombre(){
    return this.gestionClienteService.formularioRegistroCliente.controls["SegundoNombre"]
  }
  get PrimerApellido(){
    return this.gestionClienteService.formularioRegistroCliente.controls["PrimerApellido"]
  }
  get SegundoApellido(){
    return this.gestionClienteService.formularioRegistroCliente.controls["SegundoApellido"]
  }
  get TipoDocumento(){
    return this.gestionClienteService.formularioRegistroCliente.controls["TipoDocumento"]
  }
  get NumeroDocumento(){
    return this.gestionClienteService.formularioRegistroCliente.controls["NumeroDocumento"]
  }
  
  get Email(){
    return this.gestionClienteService.formularioRegistroCliente.controls["Email"]
  }
  get Genero(){
    return this.gestionClienteService.formularioRegistroCliente.controls["Genero"]
  }
  get Telefono(){
    return this.gestionClienteService.formularioRegistroCliente.controls["Telefono"]
  }
  
  get Celular(){
    return this.gestionClienteService.formularioRegistroCliente.controls["Celular"]
  }
  get Comentarios(){
    return this.gestionClienteService.formularioRegistroCliente.controls["Comentarios"]
  }
  exRegularLetras: any = "^[a-zA-Z ]*$";
  exRegularCorreo: any = "\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*";
  exRegularNumeros: any = "^[0-9]*$";

  constructor(public gestionClienteService:GestionClienteService, private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.gestionClienteService.formularioRegistroCliente = this.formbuilder.group({
      IdCliente:[0],

      PrimerNombre:["",[Validators.required, Validators.pattern(this.exRegularLetras)]],
      SegundoNombre:["",[Validators.required, Validators.pattern(this.exRegularLetras)]],
      PrimerApellido:["",[Validators.required, Validators.pattern(this.exRegularLetras)]],
      SegundoApellido:["",[Validators.required, Validators.pattern(this.exRegularLetras)]],
      TipoDocumento:["",[Validators.required,Validators.pattern(this.exRegularLetras)]],
      NumeroDocumento:["",[Validators.required, Validators.minLength(5), Validators.maxLength(11), Validators.pattern(this.exRegularNumeros)]],
      Email:["",[Validators.required, Validators.maxLength(40), Validators.pattern(this.exRegularCorreo)]],
      Genero:["",[Validators.required, Validators.pattern(this.exRegularLetras)]],
      Telefono:["",[Validators.required, Validators.minLength(7), Validators.maxLength(15), Validators.pattern(this.exRegularNumeros)]],
      Celular:["",[Validators.required, Validators.minLength(7), Validators.maxLength(15), Validators.pattern(this.exRegularNumeros)]],
      Comentarios:["",[Validators.required, Validators.pattern(this.exRegularLetras)]],
      
    });
    
  }
  onSubmit(){
    this.gestionClienteService = this.gestionClienteService.formularioRegistroCliente.value
    this.gestionClienteService.guardarCliente().subscribe(
       res =>{
         this.gestionClienteService.formularioRegistroCliente.reset();
         console.log("se registro");
       },
       err=>{
        console.log(err);
      }
    )
    //if (this.gestionClienteService ||this.gestionClienteService) {
    //  this.GuardarCliente();
    //}else{
      //this.EditarCLiente();
    //}

  }

  guardarCliente() {
  
    this.gestionClienteService.guardarCliente().subscribe(
      res =>{
        this.gestionClienteService.formularioRegistroCliente.reset();

        //this.toastr.success("Se Registro el usuario Exitosamente")
      },
      err=>{
        console.log(err);
      }
    )
  

    }
}
