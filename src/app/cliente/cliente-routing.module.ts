import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CidadesComponent } from '../cidades/cidades.component';
import { HomeComponent } from '../home/home.component';
import { ClienteComponent } from './cliente.component';

const rotas: Routes = [
    { path: '', component: HomeComponent },
    { path: 'clientes', component: ClienteComponent },
    { path: 'clientes/:cpfCnpj', component: ClienteComponent },
    { path: 'cidades', component: CidadesComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(rotas)],
    exports: [RouterModule]
})
export class AppRoutingModule { }