import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CidadesComponent } from '../cidades/cidades.component';
import { HomeComponent } from '../home/home.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { ClienteComponent } from './cliente.component';
import { EditarClientesComponent } from './editar-clientes/editar-clientes.component';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';

const rotas: Routes = [
    { path: '', component: HomeComponent },
    { path: 'clientes', component: ClienteComponent },
    { path: 'cidades', component: CidadesComponent },
    { path: 'clientes/:cpfCnpj', component: ListarClientesComponent },
    { path: 'cadastrar', component: CadastroClienteComponent },
    { path: 'editar/:id', component: EditarClientesComponent },
];

@NgModule({
    imports: [RouterModule.forChild(rotas)],
    exports: [RouterModule]
})
export class ClienteRoutingModule { }