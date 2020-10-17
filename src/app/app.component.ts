import { Component } from '@angular/core';

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


  //metodo para calcular los multiplos
  multiplos(ingresado: number) {
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
  multiploMenor(){
    this.resultMultiploMenor = [];
    if(this.resultMultiplos3.length > 1){
      this.resultMultiploMenor = [3];
      if(this.resultMultiplos5.length > 2){
        this.resultMultiplos5.forEach(element => {
          if(element !== 0){
            this.resultMultiploMenor.push(element);
          }
        });
      }
      if(this.resultMultiplos7.length > 2){
        this.resultMultiplos7.forEach(element => {
          if(element !== 0){
            this.resultMultiploMenor.push(element);
          }
        });
      }
    }
  }
  onGuardar(result: boolean){
    
  }
}
