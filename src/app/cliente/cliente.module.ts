import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "../app-routing.module";
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { CadastroClienteComponent } from "./cadastro-cliente/cadastro-cliente.component";
import { EditarClientesComponent } from "./editar-clientes/editar-clientes.component";
import { ListarClientesComponent } from "./listar-clientes/listar-clientes.component";
import { NgxMaskModule } from "ngx-mask";



@NgModule({
    declarations: [ListarClientesComponent, CadastroClienteComponent, EditarClientesComponent],
    imports: [
        CommonModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        InfiniteScrollModule,
        NgxMaskModule
    ]
})
export class ClienteModule { }