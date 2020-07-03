import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import {ContatosService} from './contatos.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatosListagemComponent } from './contatos-listagem/contatos-listagem.component';


@NgModule({
  declarations: [
    AppComponent,
    ContatosListagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ContatosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
