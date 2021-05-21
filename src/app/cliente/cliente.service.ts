import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Cliente } from "./cliente.model";


@Injectable({
    providedIn: 'root'
})

export class ClienteService {

    constructor(private http: HttpClient) {
    }

    clienteUrl = 'http://localhost:8080/clientes'

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: 'my-auth-token'
        })
    };

    buscaCpfCnpj(cpfCnpj: string) {
        return this.http.get<Cliente>(`${this.clienteUrl}/${cpfCnpj}`);
    }
}