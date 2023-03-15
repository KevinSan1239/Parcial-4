import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RespuestosComponent } from './Components/respuestos/respuestos.component';
import { VehiculosComponent } from './Components/vehiculos/vehiculos.component';

const routes: Routes = [
  {path:"vehiculos",component:VehiculosComponent},
  {path:"repuestos",component:RespuestosComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
