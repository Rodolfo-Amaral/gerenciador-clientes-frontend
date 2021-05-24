import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-editar-clientes',
  templateUrl: './editar-clientes.component.html',
  styleUrls: ['./editar-clientes.component.css']
})
export class EditarClientesComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService,
    private routes: Router) { }

  ngOnInit(): void {
    this.getClientes();
  }

  private getClientes() {
    this.clienteService.buscarTudo().subscribe(data => {
      this.clientes = data;
    })
  }
  editarCliente(id: number) {
    this.routes.navigate(['editar', id]);
  }

}
