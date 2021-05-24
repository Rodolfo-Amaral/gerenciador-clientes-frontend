import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CidadesService } from '../cidades.service';

@Component({
  selector: 'app-editar-cidade',
  templateUrl: './editar-cidade.component.html',
  styleUrls: ['./editar-cidade.component.css']
})
export class EditarCidadeComponent implements OnInit {
  public id: number;
  formCidade: FormGroup;

  constructor(private cidadeService: CidadesService,
    private routes: Router, private formBuilder: FormBuilder,
    private rota: ActivatedRoute) { }

  ngOnInit(): void {
    this.dadosForm();
    this.rota.params.subscribe(params => this.id = params['id']);
  }

  /* salvar() {
     this.cidadeService.editarCidade(this.formCidade.value).subscribe(data => {
       this.findAll = data;
     })
   }*/

  findAll() {
    this.routes.navigate(['/cidades']);
  }

  dadosForm() {
    throw new Error('Method not implemented.');
  }

}
