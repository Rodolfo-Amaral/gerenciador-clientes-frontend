import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cliente } from "./cliente.model";


@Injectable({
    providedIn: 'root'
})

export class ClienteService {

    cliente: Cliente[] = [];

    constructor(private http: HttpClient) {
    }

    private clienteUrl = 'http://localhost:8080/clientes'
    private cadastroUrl = 'http://localhost:8080/clientes/cadastrar'

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: 'my-auth-token'
        })
    };

    buscaCpfCnpj(cpfCnpj: string): Observable<Cliente> {
        return this.http.get<Cliente>(`${this.clienteUrl}/${cpfCnpj}`);
    }

    buscarTudo() {
        return this.http.get<Cliente[]>(this.clienteUrl);
    }

    cadastrarCliente(cliente: Cliente): Observable<Object> {
        return this.http.post(`${this.clienteUrl}`, cliente);
    }

    atualizarCliente(cliente: Cliente, id: number): Observable<Object> {
        return this.http.put(`${this.cadastroUrl}/${id}`, cliente);
    }

    salvar(cliente: any): Observable<any> {
        return this.http.post<any>(this.clienteUrl, cliente, this.httpOptions)
            .pipe()
    }

}