import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EntradaComponent } from './components/entrada/entrada.component';
import { SalidaComponent } from './components/salida/salida.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    EntradaComponent,
    SalidaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
