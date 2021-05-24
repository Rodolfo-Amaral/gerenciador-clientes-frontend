import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cidades } from '../cidades.model';
import { CidadesService } from '../cidades.service';

@Component({
  selector: 'app-cadastro-cidade',
  templateUrl: './cadastro-cidade.component.html',
  styleUrls: ['./cadastro-cidade.component.css']
})
export class CadastroCidadeComponent implements OnInit {
  id: number;
  formCidade: FormGroup;
  public cidade = new Cidades();
  public cidades: Cidades[] = [];

  constructor(private cidadeService: CidadesService,
    private routes: ActivatedRoute, private formBuilder: FormBuilder,
    private rota: Router) { }

  ngOnInit(): void {
    this.cadCidade();
    this.routes.params.subscribe(params => this.id = params['id']);
  }

  salvar() {
    this.cidadeService.cadastrarCidade(this.formCidade.value).subscribe(data => {
      this.findAll();
    })
  }

  findAll() {
    this.rota.navigate(['/cidades']);
  }

  /*enviarDados(): void {
    this.salvar = this.formCidade;
    console.warn('Dados enviados', this.cadCidade);
  }*/

  cadCidade() {
    this.formCidade = this.formBuilder.group({
      nomeCidade: ['', Validators.required],
      nomeEstado: ['', Validators.required],
      siglaestado: ['', Validators.required]
    })
  }
}
