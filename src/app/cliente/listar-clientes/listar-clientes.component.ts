import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Cidades } from 'src/app/cidades/cidades.model';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  public cliente = new Cliente();
  public clientes: Cliente[] = [];
  cidade: Cidades[] = [];
  dataSource: MatTableDataSource<Cliente>;
  columns: string[] = ['id', 'nome', 'cpfCnpj', 'nascimento', 'email', 'logradouro', 'numero'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(public clienteService: ClienteService,
    private routes: Router) {
    /*this.clientes = [{
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
      nome: 'Jailson Mendes',
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
    }];*/

  }

  ngOnInit(): void {
    this.clienteService.buscarTudo().subscribe(response => {
      this.clientes = response;
      this.dataSource = new MatTableDataSource(this.clientes);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
    this.buscarTudo();
    this.buscaCpfCnpj();
  }

  buscarTudo() {
    this.clienteService.buscarTudo()
      .subscribe(cliente => {
        this.clientes = cliente;
        console.log(this.clientes);
      });
  }

  buscaCpfCnpj() {
    this.clienteService.buscaCpfCnpj('cpfCnpj').subscribe(data => {
      this.cliente = data;
      console.log(this.clientes);
    });
  }


}