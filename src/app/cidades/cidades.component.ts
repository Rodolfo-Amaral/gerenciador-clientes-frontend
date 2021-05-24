import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cidades } from './cidades.model';
import { CidadesService } from './cidades.service';

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.component.html',
  styleUrls: ['./cidades.component.css']
})
export class CidadesComponent implements OnInit {
  cidades: Cidades[] = [];

  constructor(private cidadeService: CidadesService,
    private routes: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  private findAll() {
    this.cidadeService.buscarCidades().subscribe(data => {
      this.cidades = data;
    })
  }

  atualizarCidade(id: number) {
    this.routes.navigate(['${id}', id]);
  }

  private buscarPorNome(nomeCidade: string) {
    this.cidadeService.buscarPorNome(nomeCidade).subscribe(data => {
      this.cidadeService = data;
    })
  }

}
