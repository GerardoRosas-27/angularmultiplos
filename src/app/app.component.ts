import { Component } from '@angular/core';
import { SnapshotAction } from 'angularfire2/database';
import Swal from 'sweetalert2';
import { Multiplos } from './models/multiplos';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Se declaran los arreglos don de se almacenaran los resultados
  resultMultiplos3: number[];
  resultMultiplos5: number[];
  resultMultiplos7: number[];
  resultMultiploMenor: number[];

  numeroInsertado: number;

  firebaseMultiplos: Multiplos[];

  constructor(
    private firebase: FirebaseService
  ) {
  }
  ngOnInit(): void {
    this.getMultiplos();
  }

  //metodo para calcular los multiplos
  multiplos(ingresado: number) {
    this.numeroInsertado = ingresado;
    console.log('numero ingresado: ', ingresado);
    //Se establecen los multiplos de 3, 5 y 7;
    const multiplo3 = 3;
    const multiplo5 = 5;
    const multiplo7 = 7;
    // se vacian los arreglos
    this.resultMultiplos3 = [];
    this.resultMultiplos5 = [];
    this.resultMultiplos7 = [];

    //se recorre un ciclo del 0 al valor ingresado por el usuario
    for (let index = 0; index < ingresado; index++) {
      //Se manda e verificar el valor de index con el multiplo de 3 para saver si es un multiplo.
      if (this.esMultiplo(index, multiplo3)) {
        //si el sobrante de la divicion de index / 3 es cero, entonces index es un multiplo de 3
        //se guarda el multiplo en el arreglo resultMultiplos3
        this.resultMultiplos3.push(index);
      }
      if (this.esMultiplo(index, multiplo5)) {
        this.resultMultiplos5.push(index);
      }
      if (this.esMultiplo(index, multiplo7)) {
        this.resultMultiplos7.push(index);
      }
    }
    console.log('los multiplos de : ' + multiplo3 + '. de 0 a ' + ingresado + ', son:');
    console.log(this.resultMultiplos3);
    console.log('los multiplos de : ' + multiplo5 + '. de 0 a ' + ingresado + ', son:');
    console.log(this.resultMultiplos5);
    console.log('los multiplos de : ' + multiplo7 + '. de 0 a ' + ingresado + ', son:');
    console.log(this.resultMultiplos7);
    this.multiploMenor();
  }

  //Metodo para verivicar si es un multiplo
  esMultiplo(n1: number, n2: number) {
    //si el sobrante de la divicion es 0 entonces es un multiplo y se retorna true, por el contrario false
    if (n1 % n2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  multiploMenor() {
    this.resultMultiploMenor = [];
    if (this.resultMultiplos3.length > 1) {
      this.resultMultiploMenor = [3];
      if (this.resultMultiplos5.length > 2) {
        this.resultMultiplos5.forEach(element => {
          if (element !== 0) {
            this.resultMultiploMenor.push(element);
          }
        });
      }
      if (this.resultMultiplos7.length > 2) {
        this.resultMultiplos7.forEach(element => {
          if (element !== 0) {
            this.resultMultiploMenor.push(element);
          }
        });
      }
    }
  }
  //metodo para guardar los multiplos en firebase
  onGuardar(result: boolean) {
    // se formatea la data de los multiplos para enviarla
    const dataMultiplos: Multiplos = {
      multiplos3: this.resultMultiplos3,
      multiplos5: this.resultMultiplos5,
      multiplos7: this.resultMultiplos7,
      menor: this.resultMultiploMenor,
      insertar: this.numeroInsertado
    }
    if (this.firebaseMultiplos.length > 0) {
      this.firebase.insertMasUno(dataMultiplos);
    } else {
      this.firebase.primerGuardadoMultiplo(dataMultiplos);
    }
  }
  getMultiplos() {
    this.firebase.getMultiplos().snapshotChanges()
      .subscribe(
        (item: SnapshotAction<any>[]) => {
          this.firebaseMultiplos = new Array();
          item.forEach(element => {
            const result: Multiplos = element.payload.val();
            this.firebaseMultiplos.push(result);
          });
        },
        err => {
          Swal.fire('', 'No se cargaron los multiplos de firebase', 'error');
          console.log(err);
        }
      )
  }
}
