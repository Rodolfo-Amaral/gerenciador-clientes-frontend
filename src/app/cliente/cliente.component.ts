import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from './cliente.model';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  title = 'Gerenciador de Clientes';

  cliente = new Cliente();

  clientes: Cliente[] = [];


  constructor(private clienteService: ClienteService,
    private rota: Router) { }

  ngOnInit(): void {

  }

  buscarTudo() {
    this.clienteService.buscarTudo()
      .subscribe(cliente => {
        this.clientes = cliente;
      });
  }

  listaCli() {
    this.rota.navigate(['/clientes']);
  }

}