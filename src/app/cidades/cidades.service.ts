import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cidades } from './cidades.model';

@Injectable({
  providedIn: 'root'
})
export class CidadesService {
  constructor(private http: HttpClient) { }

  [x: string]: any;

  cidadesUrl = 'http://localhost:8080/cidades'

  buscaSiglaEstado = 'http://localhost:8080/cidades/estados'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token'
    })
  };

  buscarCidades() {
    return this.http.get<any[]>(`${this.cidadesUrl}/listar`)
  }

  buscarPorNome(nomeCidade: string): Observable<any> {
    const options = nomeCidade ?
      { params: new HttpParams().set('nomeCidade', nomeCidade) } : {};
    return this.http.get<any[]>(`${this.cidadesUrl}/nomeCidade`, options)
  }

  buscarSiglaEstado(siglaEstado: string): Observable<any> {
    return this.http.get<any[]>(`${this.buscaSiglaEstado}/${siglaEstado}`);
  }

  cadastrarCidade(cidade: Cidades): Observable<Object> {
    return this.http.post(`${this.cidadesUrl}`, cidade);
  }

  editarCidade(cidade: Cidades, id: number): Observable<any> {
    return this.http.put(`${this.http}/${id}`, cidade);
  }

}
