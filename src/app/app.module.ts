import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatPaginatorModule } from '@angular/material/paginator'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CidadesComponent } from './cidades/cidades.component';
import { CadastroClienteComponent } from './cliente/cadastro-cliente/cadastro-cliente.component';
import { ClienteComponent } from './cliente/cliente.component';
import { EditarClientesComponent } from './cliente/editar-clientes/editar-clientes.component';
import { ListarClientesComponent } from './cliente/listar-clientes/listar-clientes.component';
import { HomeComponent } from './home/home.component';
import { MatNativeDateModule } from '@angular/material/core';
import { CadastroCidadeComponent } from './cidades/cadastro-cidade/cadastro-cidade.component';
import { EditarCidadeComponent } from './cidades/editar-cidade/editar-cidade.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';
import { ClienteRoutingModule } from './cliente/cliente-routing.module';
import { CidadeRoutingModule } from './cidades/cidade-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClienteComponent,
    CidadesComponent,
    ListarClientesComponent,
    CadastroClienteComponent,
    EditarClientesComponent,
    CadastroCidadeComponent,
    EditarCidadeComponent

  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    ClienteRoutingModule,
    CidadeRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatTableModule,
    MatDatepickerModule,
    MatInputModule,
    MatMenuModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatSelectModule,
    MatStepperModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ButtonModule,
    RadioButtonModule,
    InputNumberModule,
    TooltipModule,
    FlexLayoutModule,
    NgxMaskModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
