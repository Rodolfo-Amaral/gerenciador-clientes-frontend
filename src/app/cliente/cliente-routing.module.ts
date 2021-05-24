import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { EditarClientesComponent } from './editar-clientes/editar-clientes.component';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';

const rotas: Routes = [
    { path: 'clientes/listar', component: ListarClientesComponent },
    /*{ path: 'clientes/listar/:cpfCnpj', component: ListarClientesComponent },*/
    { path: 'clientes/cadastrar', component: CadastroClienteComponent },
    { path: 'clientes/editar/:id', component: EditarClientesComponent },
];

@NgModule({
    imports: [RouterModule.forChild(rotas)],
    exports: [RouterModule]
})
export class ClienteRoutingModule { }