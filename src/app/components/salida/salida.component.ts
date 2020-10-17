import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-salida',
  templateUrl: './salida.component.html',
  styleUrls: ['./salida.component.css']
})
export class SalidaComponent implements OnInit {
  @Input() multiplos3: number[];
  @Input() multiplos5: number[];
  @Input() multiplos7: number[];
  @Input() multiploMenor: number[];
  @Input() insertado: number;
  @Input() statusGuardar: boolean;
  @Output() guardar: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onGuardar(){
    this.guardar.emit(true);
  }

}
