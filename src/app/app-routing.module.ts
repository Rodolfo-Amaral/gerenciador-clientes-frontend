import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CidadesComponent } from "./cidades/cidades.component";
import { CadastroClienteComponent } from "./cliente/cadastro-cliente/cadastro-cliente.component";
import { ClienteComponent } from "./cliente/cliente.component";
import { EditarClientesComponent } from "./cliente/editar-clientes/editar-clientes.component";
import { ListarClientesComponent } from "./cliente/listar-clientes/listar-clientes.component";
import { HomeComponent } from "./home/home.component";


const rotas: Routes = [
    { path: '', component: HomeComponent },
    { path: 'clientes', component: ClienteComponent },
    { path: 'cidades', component: CidadesComponent },
    { path: 'clientes/:cpfCnpj', component: ListarClientesComponent },
    { path: 'cadastros/clientes', component: CadastroClienteComponent },
    { path: 'editar/:id', component: EditarClientesComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(rotas)],
    exports: [RouterModule]
})
export class AppRoutingModule { }