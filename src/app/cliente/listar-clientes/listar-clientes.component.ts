import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(public clienteService: ClienteService,
    private routes: Router) { }

  ngOnInit(): void {
    /* this.buscaCpfCnpj();*/
  }

  /*buscaCpfCnpj() {
    this.clienteService.buscaCpfCnpj().subscribe(data => {
      this.clientes = data;
    });
  }*/


}