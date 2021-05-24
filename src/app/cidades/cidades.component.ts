import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cidades } from './cidades.model';
import { CidadesService } from './cidades.service';

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.component.html',
  styleUrls: ['./cidades.component.css']
})
export class CidadesComponent implements OnInit {
  cidade = new Cidades();
  cidades: Cidades[] = [];

  constructor(private cidadeService: CidadesService,
    private routes: ActivatedRoute, private rotas: Router) { }

  ngOnInit(): void {
    this.findAll();
    const nomeCidade = this.routes.snapshot.params.id;
    this.buscarPorNome(nomeCidade);
  }

  private findAll() {
    this.cidadeService.buscarCidades().subscribe(data => {
      this.cidades = data;
      console.log(data)
    })
  }

  atualizarCidade(id: number) {
    this.rotas.navigate(['${id}', id]);
  }

  buscarPorNome(nomeCidade: string) {
    this.cidadeService.buscarPorNome(nomeCidade)
      .subscribe(cidade => {
        this.cidades = cidade;
        console.log(cidade)
      })
  }
}

