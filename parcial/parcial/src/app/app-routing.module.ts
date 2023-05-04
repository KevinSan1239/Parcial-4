import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulariovehiculosComponent } from './Components/formulariovehiculos/formulariovehiculos.component';
import { RespuestosComponent } from './Components/respuestos/respuestos.component';
import { VehiculosComponent } from './Components/vehiculos/vehiculos.component';
import { FormulariorepuestosComponent } from './Components/formulariorepuestos/formulariorepuestos.component';

const routes: Routes = [
  {path:"vehiculos",component:VehiculosComponent},
  {path:"repuestos",component:RespuestosComponent},
  {path:"formulariovehiculos",component:FormulariovehiculosComponent},
  {path:"formulariorepuestos",component:FormulariorepuestosComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
