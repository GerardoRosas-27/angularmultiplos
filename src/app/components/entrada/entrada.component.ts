import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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
    this.salidaMultiplo.emit(this.entrada);
  }

}
