import { Component, OnInit } from '@angular/core';
import { Cidades } from '../cidades.model';
import { CidadesService } from '../cidades.service';

@Component({
  selector: 'app-listar-cidade',
  templateUrl: './listar-cidade.component.html',
  styleUrls: ['./listar-cidade.component.css']
})
export class ListarCidadeComponent implements OnInit {

  cidade: Cidades[] = [];

  constructor(public cidadeService: CidadesService) { }

  ngOnInit(): void {
    /*this.buscarPorNome(); */
  }

  /*buscarPorNome() {
     this.cidadeService.buscarPorNome().subscribe(response => {
       this.cidade = this.cidade.concat(response['conteudo']);
       console.log(this.cidade);
     });
   }*/

}
