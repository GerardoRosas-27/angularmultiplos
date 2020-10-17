import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, SnapshotAction, DatabaseSnapshot } from 'angularfire2/database';
import { Multiplos } from '../models/multiplos';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  bdMultiplos: string = 'multiplos';
  listMultiplos: AngularFireList<Multiplos>;
  constructor(
    private firebase: AngularFireDatabase
  ) { }

  
  primerGuardadoMultiplo(data: Multiplos) {
    this.firebase.list(`/${this.bdMultiplos}`).push(data);
  }

  getMultiplos() {
    return this.listMultiplos = this.firebase.list(`/${this.bdMultiplos}`);
  }
  
  insertMasUno(data: Multiplos) {
    this.listMultiplos.push(data);
  }

 
  

}
