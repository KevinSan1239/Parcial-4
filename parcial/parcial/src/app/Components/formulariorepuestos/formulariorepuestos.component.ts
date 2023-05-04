import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulariorepuestos',
  templateUrl: './formulariorepuestos.component.html',
  styleUrls: ['./formulariorepuestos.component.css']
})
export class FormulariorepuestosComponent {
  addressForm = this.fb.group({
    idrespuesto: [null, Validators.required],
    valor: [null, Validators.required],
    tipo: [null, Validators.required],
    vehiculos: [null, Validators.required],
  });


  

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }
}
