import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  clientes: Cliente[] = [];
  dataSource: MatTableDataSource<Cliente>;
  columns: string[] = ['id', 'nome', 'cpfCnpj', 'nascimento', 'email', 'logradouro', 'numero'];

  constructor(public clienteService: ClienteService,
    private routes: Router) {
    this.clientes = [{
      id: 1,
      nome: 'Rodolfo Amaral',
      cpfCnpj: '10000000000',
      nascimento: '26/12/1996',
      email: 'teste@teste.com',
      logradouro: 'rua teste',
      numero: 2222,
      cidade: 'stringfield',
      sexo: 'Masculino',
      bairro: 'Teste',
      cep: '123456-486',
      complemento: 'string',
      fone: '18979799797',
      estadoCivil: 'string',
      dataCadastro: 'string',
      status: 'string',
    },
    {
      id: 2,
      nome: 'GALO CEGOOOO',
      cpfCnpj: '10002560000',
      nascimento: '05/01/1906',
      email: 'galocego@teste.com',
      logradouro: 'rua maringá',
      numero: 5,
      cidade: 'stringfield',
      sexo: 'Masculino',
      bairro: 'Teste',
      cep: '123456-486',
      complemento: 'string',
      fone: '18979799797',
      estadoCivil: 'string',
      dataCadastro: 'string',
      status: 'string',
    }];
    this.dataSource = new MatTableDataSource(this.clientes);
  }

  ngOnInit(): void {
    /* this.buscaCpfCnpj();*/
  }

  /*buscaCpfCnpj() {
    this.clienteService.buscaCpfCnpj().subscribe(data => {
      this.clientes = data;
    });
  }*/


}