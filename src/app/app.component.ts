import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularmultiplos';



  multiplos(ingresado: number) {
    const multiplo3 = 3;
    const multiplo5 = 5;
    const multiplo7 = 7;
    const resultMultiplos3 = [];
    for (let index = 0; index < ingresado; index++) {
      if (this.esMultiplo(index, multiplo3)) {
        resultMultiplos3.push(index);
      }
    }
    console.log('los multiplos de : ' + multiplo3 + '. de 0 a ' + ingresado + ', son:');
    console.log(resultMultiplos3);
  }

  esMultiplo(n1: number, n2: number) {
    if (n1 % n2 === 0) {
      return true;
    } else {
      return false;
    }
  }
}
