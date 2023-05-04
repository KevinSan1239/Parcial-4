import { Component, OnInit } from '@angular/core';
import { AppservicioService } from 'src/app/Servicies/appservicio.service';

@Component({
  selector: 'app-respuestos',
  templateUrl: './respuestos.component.html',
  styleUrls: ['./respuestos.component.css']
})
export class RespuestosComponent implements OnInit{

  constructor(public api:AppservicioService){}
  public displayedColumns:any=[];
  public dataSource:any=[];
  ngOnInit(): void {
    this.function_get_final();


      }


      public function_get_final(){
        this.api.function_consumo("Respuestoes").subscribe((reso:any)=>{
          this.displayedColumns=Object.keys(reso[0]);
          this.dataSource=reso;
        })
      }

}
