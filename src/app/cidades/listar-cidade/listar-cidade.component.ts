import { Component, OnInit } from '@angular/core';
import { Cidades } from '../cidades.model';
import { CidadesService } from '../cidades.service';

@Component({
  selector: 'app-listar-cidade',
  templateUrl: './listar-cidade.component.html',
  styleUrls: ['./listar-cidade.component.css']
})
export class ListarCidadeComponent implements OnInit {

  nomeCidade: Cidades[] = [];

  constructor(public cidadeService: CidadesService) { }

  ngOnInit(): void {
    this.buscarCidades();
  }

  buscarCidades() {
    this.cidadeService.buscarCidades().subscribe(data => {
      this.nomeCidade = data;
      console.log(this.nomeCidade);
    });
  }

}
