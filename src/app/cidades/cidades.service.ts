import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsePageable } from '../responsePageable';
import { Cidades } from './cidades.model';

@Injectable({
  providedIn: 'root'
})
export class CidadesService {
  constructor(private http: HttpClient) { }

  [x: string]: any;
  apiUrl = 'http://localhost:8080/cidades'

  buscaSiglaEstado = 'http://localhost:8080/cidades/estados'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token'
    })
  };

  buscarCidades() {
    return this.http.get<any[]>(this.apiUrl)
  }

  buscarPorNome(nomeCidade: string): Observable<any> {
    return this.http.get<Cidades>(`${this.apiUrl}/${nomeCidade}`)
  }

  buscarSiglaEstado(siglaEstado: string): Observable<ResponsePageable> {
    return this.http.get<ResponsePageable>(this.buscaSiglaEstado + siglaEstado);
  }

  cadastrarCidade(cidade: Cidades): Observable<Object> {
    return this.http.post(`${this.apiUrl}`, cidade);
  }

  editarCidade(cidade: Cidades, id: number): Observable<any> {
    return this.http.put(`${this.http}/${id}`, cidade);
  }

}
