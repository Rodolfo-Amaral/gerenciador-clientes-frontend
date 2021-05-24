import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cidades } from 'src/app/cidades/cidades.model';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {
  title = 'Cadastro de Clientes';

  public id: number;
  cliente = new Cliente();
  nomeCidade: Cidades[];
  clientes: Cliente[];
  dados = this.clienteService.buscarTudo();
  cadCliente: FormGroup;
  public customPatterns = { '0': { pattern: new RegExp('\[0-9\]') } };


  constructor(private clienteService: ClienteService,
    private routes: ActivatedRoute, private formBuilder: FormBuilder,
    private rota: Router) { }

  ngOnInit(): void {
    this.dadosForm();
  }

  buscarTudo() {
    this.clienteService.buscarTudo()
      .subscribe(cliente => {
        this.clientes = cliente;
      });
  }

  enviarDados(): void {
    this.salvarCliente = this.dadosForm;
    console.warn('Dados enviados', this.dadosForm);
    this.cadCliente.reset();
  }

  salvarCliente(cadCliente: NgForm) {
    console.log(cadCliente.value);
    console.log(this.cliente);
    this.clienteService.salvar(this.cliente)
      .subscribe(cliente => this.nomeCidade.push(cliente));
    cadCliente.reset();
    this.cliente = new Cliente();
  }

  atualizar() {
    this.clienteService.atualizarCliente(this.cadCliente.value, this.id).subscribe(data => {
      console.log(data);
      this.listaCli();
    })
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
      fone: '',
      status: ['', Validators.required],
    })
  }

  listaCli() {
    this.rota.navigate(['/clientes']);
  }

}
