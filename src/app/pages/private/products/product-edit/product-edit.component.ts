import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  imports: [ ReactiveFormsModule, JsonPipe],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent {
  formData!: FormGroup;
  
    constructor() {
      // Agrupacion de campos del formulario
      this.formData = new FormGroup({
        name: new FormControl( '', [ Validators.required ] ),
        description: new FormControl( '' )
      });
    }
  
    onSubmit() {
      // Obtiene los valores de los campos campos del formulario
      const inputData = this.formData.value;
  
      // Verifica el estado de validacion del formulario
      if( this.formData.valid ) {
        console.log( inputData );   // Enviar los datos al BackEnd
      }
  
      this.formData.reset();    // Limpia los campos del formulario
    }
}
