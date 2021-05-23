import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BuscarCidadeComponent } from "./cidades/buscar-cidade/buscar-cidade.component";
import { CadastroCidadeComponent } from "./cidades/cadastro-cidade/cadastro-cidade.component";
import { CidadesComponent } from "./cidades/cidades.component";
import { EditarCidadeComponent } from "./cidades/editar-cidade/editar-cidade.component";
import { CadastroClienteComponent } from "./cliente/cadastro-cliente/cadastro-cliente.component";
import { ClienteComponent } from "./cliente/cliente.component";
import { EditarClientesComponent } from "./cliente/editar-clientes/editar-clientes.component";
import { ListarClientesComponent } from "./cliente/listar-clientes/listar-clientes.component";
import { HomeComponent } from "./home/home.component";


const rotas: Routes = [
    { path: '', component: HomeComponent },
    { path: 'clientes', component: ClienteComponent },
    { path: 'cidades', component: CidadesComponent },
    { path: 'clientes/listarAtivos', component: ListarClientesComponent },
    { path: 'clientes/cadastrar', component: CadastroClienteComponent },
    { path: 'clientes/editar/:id', component: EditarClientesComponent },
    { path: 'cidades/cadastrar', component: CadastroCidadeComponent },
    { path: 'cidades/:id', component: EditarCidadeComponent },
    { path: 'cidades/{nomeCidade}', component: BuscarCidadeComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(rotas)],
    exports: [RouterModule]
})
export class AppRoutingModule { }