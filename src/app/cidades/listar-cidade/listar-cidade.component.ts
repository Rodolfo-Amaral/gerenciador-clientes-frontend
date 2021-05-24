import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
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
    this.buscarPorNome();
  }

  buscarPorNome() {
    this.cidadeService.buscarPorNome().subscribe(data => {
      this.nomeCidade = data;
      console.log(this.nomeCidade);
    });
  }

}
