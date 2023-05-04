import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulariovehiculos',
  templateUrl: './formulariovehiculos.component.html',
  styleUrls: ['./formulariovehiculos.component.css']
})
export class FormulariovehiculosComponent {
  addressForm = this.fb.group({
    idvehiculo: [null, Validators.required],
    marcas: [null, Validators.required],
    color: [null, Validators.required],
    modelo: [null, Validators.required],
    placa: [null, Validators.required],
  });

  



  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }
}
