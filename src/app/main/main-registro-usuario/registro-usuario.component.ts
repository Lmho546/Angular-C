import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistroFormulario } from 'src/classes/registroFormulario.class';

@Component({
  selector: 'app-main-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent {

  @Input()
  clickRegistrarse =  false;

  controlNombre = new FormControl("", [Validators.required, Validators.minLength(6)]);
  controlApellido = new FormControl("", [Validators.required, Validators.minLength(6)]);
  controlEmail = new FormControl("", [Validators.required, Validators.email]);
  controlContrasenia = new FormControl("", [Validators.required, Validators.minLength(8)]);

  contructorFormulario: Array<RegistroFormulario> = [

    new RegistroFormulario(1, "text", "Nombre", this.controlNombre, "Mínimo 6 caracteres."),
    new RegistroFormulario(2, "text", "Apellido", this.controlApellido, "Mínimo 6 caracteres."),
    new RegistroFormulario(3, "email", "Email", this.controlEmail, "No es un email válido."),
    new RegistroFormulario(1, "password", "Contraseña", this.controlContrasenia, "Mínimo 8 caracteres.")

  ];

  registroUsuario : FormGroup

  constructor (private constructorFormulario : FormBuilder){

    this.registroUsuario = this.constructorFormulario.group({

      nombre: this.controlNombre,
      apellido: this.controlApellido,
      email: this.controlEmail,
      contrasenia: this.controlContrasenia

    });

  }

  botonRegistrarse() : void {

    if(this.registroUsuario.valid){

    console.log(this.registroUsuario.value);

    }
    else{
      
      this.registroUsuario.markAllAsTouched();
      console.log("Formulario Iválido");

    }
  }

}
