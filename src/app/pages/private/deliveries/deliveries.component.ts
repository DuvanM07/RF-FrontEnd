import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-deliverys',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './deliveries.component.html',
  styleUrl: './deliveries.component.css'
})
export class DeliverysComponent {
  formData!: FormGroup;
  constructor() {
    this.formData = new FormGroup({
      client: new FormControl(
        '',
        [ Validators.required ]
      ),
      products: new FormControl(
        '',
        [ Validators.required ]
      ),
      total: new FormControl(
        '',
        [ Validators.required ]
      ),
      estado: new FormControl(
        '',
        [ Validators.required ]
      )
    });
  }
  
  onSubmit() {
    const inputData = this.formData.value;

    if( this.formData.valid) {
      console.log(inputData);
    }

    this.formData.reset();
  } 
}
