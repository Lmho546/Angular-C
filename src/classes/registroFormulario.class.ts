import { FormControl } from "@angular/forms";

export class RegistroFormulario {
    constructor(

      public id : number,
      public tipo : string,
      public label : string,
      public control : FormControl,
      public validacion : string

    ){}
  }