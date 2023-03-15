import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppservicioService {

  public url='';
  constructor(public http: HttpClient) {
    this.url='https://localhost:7228/api/';
   }
  
  public function_consumo(objClass:string){

    return this.http.get(this.url+objClass);
  }
}


