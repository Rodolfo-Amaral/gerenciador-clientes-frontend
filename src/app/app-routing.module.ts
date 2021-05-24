import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CidadesComponent } from "./cidades/cidades.component";
import { CadastroClienteComponent } from "./cliente/cadastro-cliente/cadastro-cliente.component";
import { ClienteComponent } from "./cliente/cliente.component";
import { HomeComponent } from "./home/home.component";


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'clientes', component: ClienteComponent },
    { path: 'cidades', component: CidadesComponent },
    { path: 'clientes/cadastrar', component: CadastroClienteComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }