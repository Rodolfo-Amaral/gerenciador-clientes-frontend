import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cidades } from '../cidades.model';
import { CidadesService } from '../cidades.service';

@Component({
  selector: 'app-listar-cidade',
  templateUrl: './listar-cidade.component.html',
  styleUrls: ['./listar-cidade.component.css']
})
export class ListarCidadeComponent implements OnInit {

  constructor(public cidadeService: CidadesService, private routes: ActivatedRoute) { }
  cidade = new Cidades();
  cidades: Cidades[] = [];


  ngOnInit(): void {
    const nomeCidade = this.routes.snapshot.params.id;
    this.buscarPorNome(nomeCidade);

  }

  buscarPorNome(nomeCidade: string) {
    this.cidadeService.buscarPorNome(nomeCidade).subscribe(cidade => {
      this.cidades = cidade;
    })
  }
}

