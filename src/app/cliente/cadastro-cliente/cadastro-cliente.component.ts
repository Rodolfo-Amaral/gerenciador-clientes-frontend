import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  public id: number;
  cadCliente: FormGroup;
  public customPatterns = { '0': { pattern: new RegExp('\[0-9\]') } };


  constructor(private clienteService: ClienteService,
    private routes: ActivatedRoute, private formBuilder: FormBuilder,
    private rota: Router) { }

  ngOnInit(): void {
    this.dadosForm();
  }

  salvar() {
    this.clienteService.cadastrarCliente(this.cadCliente.value).subscribe(data => {
      console.log(data);
      this.listaCli();
    })
  }

  atualizar() {
    this.clienteService.atualizarCliente(this.cadCliente.value, this.id).subscribe(data => {
      console.log(data);
      this.listaCli();
    })
  }

  enviarDados() {
    if (this.id) {
      this.atualizar();
    } else {
      this.salvar();
    }
  }

  dadosForm() {
    this.cadCliente = this.formBuilder.group({
      nome: ['', Validators.required],
      cpfCnpj: ['', Validators.required],
      sexo: ['', Validators.required],
      estadoCivil: ['', Validators.required],
      email: ['', Validators.email],
      nascimento: ['', Validators.required],
      siglaEstado: ['', Validators.required],
      nomeCidade: ['', Validators.required],
      cep: ['', Validators.required],
      logradouro: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: ['', Validators.required],
      bairro: ['', Validators.required],
      telefone: ['', Validators.required],

    })
  }

  listaCli() {
    this.rota.navigate(['/clientes']);
  }

}
