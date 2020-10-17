import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {
  @Output() salidaMultiplo: EventEmitter<number> = new EventEmitter<number>();

  entrada: number;

  constructor() { }

  ngOnInit(): void {
  }

  onCalcular(){
    if(this.entrada > 0){
      this.salidaMultiplo.emit(this.entrada);
    }else{
      Swal.fire('','Ingresa un numero mayor a 0', 'error');
    }
    
  }

}
