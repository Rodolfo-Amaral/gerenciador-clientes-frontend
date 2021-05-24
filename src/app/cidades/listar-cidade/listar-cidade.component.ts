import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Cidades } from '../cidades.model';
import { CidadesService } from '../cidades.service';

@Component({
  selector: 'app-listar-cidade',
  templateUrl: './listar-cidade.component.html',
  styleUrls: ['./listar-cidade.component.css']
})
export class ListarCidadeComponent implements OnInit {
  public cidade = new Cidades();
  public cidades: Cidades[] = [];
  dataSource: MatTableDataSource<Cidades>;
  columns: string[] = ['id', 'nomeCidade', 'nomeEstado', 'siglaEstado'];


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(public cidadeService: CidadesService,
    private routes: ActivatedRoute) {
    /*this.cidades = [{
      id: 4752,
      nomeCidade: 'Assis',
      nomeEstado: 'São Paulo',
      siglaEstado: 'SP'
    },
    {
      id: 1,
      nomeCidade: 'Afonso Cláudio',
      nomeEstado: 'Espírito Santo',
      siglaEstado: 'ES'
    },
    {
      id: 4820,
      nomeCidade: 'Cândido Mota',
      nomeEstado: 'São Paulo',
      siglaEstado: 'SP'
    }
    ]*/
  }


  ngOnInit(): void {
    this.cidadeService.buscarCidades().subscribe(response => {
      this.cidades = response;
      this.dataSource = new MatTableDataSource(this.cidades);
      this.dataSource.paginator = this.paginator;
    })
    const nomeCidade = this.routes.snapshot.params.nomeCidade;
    this.buscarPorNome(nomeCidade);
    const siglaEstado = this.routes.snapshot.params.siglaEstado;
    this.buscarSiglaEstado(siglaEstado);
  }

  buscarPorNome(nomeCidade: string) {
    this.cidadeService.buscarPorNome(nomeCidade).subscribe(cidade => {
      this.cidades = cidade;
    })
  }
  buscarSiglaEstado(siglaEstado: string) {
    this.cidadeService.buscarPorNome(siglaEstado).subscribe(cidade => {
      this.cidades = cidade;
    })
  }
}

