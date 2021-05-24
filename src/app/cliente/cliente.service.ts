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

    private listarClienteUrl = 'http://localhost:8080/clientes/listar'
    private cadastroUrl = 'http://localhost:8080/clientes/cadastrar'

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: 'my-auth-token'
        })
    };

    buscaCpfCnpj(cpfCnpj: string): Observable<Cliente> {
        return this.http.get<Cliente>(`${this.listarClienteUrl}/${cpfCnpj}`);
    }

    buscarTudo(): Observable<any[]> {
        return this.http.get<any[]>(this.listarClienteUrl);
    }

    cadastrarCliente(cliente: Cliente): Observable<Object> {
        return this.http.post(`${this.cadastroUrl}`, cliente);
    }

    atualizarCliente(cliente: Cliente, id: number): Observable<Object> {
        return this.http.put(`${this.cadastroUrl}/${id}`, cliente);
    }

    salvar(cliente: any): Observable<any> {
        return this.http.post<any>(this.cadastroUrl, cliente, this.httpOptions)
            .pipe()
    }

}