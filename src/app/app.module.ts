import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { CidadesComponent } from './cidades/cidades.component';
import { ListarClientesComponent } from './cliente/listar-clientes/listar-clientes.component';
import { CadastroClienteComponent } from './cliente/cadastro-cliente/cadastro-cliente.component';
import { EditarClientesComponent } from './cliente/editar-clientes/editar-clientes.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClienteComponent,
    CidadesComponent,
    ListarClientesComponent,
    CadastroClienteComponent,
    EditarClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    CommonModule,
    InputTextModule,
    ButtonModule,
    RadioButtonModule,
    InputNumberModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
