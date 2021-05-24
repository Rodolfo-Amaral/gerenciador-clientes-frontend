import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroCidadeComponent } from './cadastro-cidade/cadastro-cidade.component';
import { CidadesComponent } from './cidades.component';
import { EditarCidadeComponent } from './editar-cidade/editar-cidade.component';
import { ListarCidadeComponent } from './listar-cidade/listar-cidade.component';

const rotas: Routes = [
    { path: 'cidades/:nomeCidade', component: ListarCidadeComponent },
    { path: 'cidades', component: ListarCidadeComponent },
    { path: 'cidades/:nomeCidade', component: CidadesComponent },
    { path: 'cidades/estados/:siglaEstado', component: ListarCidadeComponent },
    { path: 'cidades/cadastrar', component: CadastroCidadeComponent },
    { path: 'cidades/:id', component: EditarCidadeComponent },

];

@NgModule({
    imports: [RouterModule.forChild(rotas)],
    exports: [RouterModule]
})
export class CidadeRoutingModule { }