import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  public id: number;
  dados = this.clienteService.buscarTudo();
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

  enviarDados(): void {
    this.salvar = this.dadosForm;
    console.warn('Dados enviados', this.cadCliente.value);
    this.cadCliente.reset();
  }

  dadosForm() {
    this.cadCliente = this.formBuilder.group({
      nome: ['', Validators.required],
      cpfCnpj: ['', Validators.required],
      sexo: '',
      estadoCivil: '',
      email: '',
      nascimento: '',
      siglaEstado: '',
      nomeCidade: '',
      cep: '',
      logradouro: '',
      numero: '',
      complemento: '',
      bairro: '',
      telefone: '',
      status: ['', Validators.required],
    })
  }

  listaCli() {
    this.rota.navigate(['/clientes']);
  }

}
