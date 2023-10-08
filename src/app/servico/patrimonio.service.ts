import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patrimonio } from '../model/patrimonio.component';
import { Observable, take } from 'rxjs';
import { Entidade } from '../model/entidades.component';


@Injectable({
  providedIn: 'root'
})
export class PatrimonioService {

  private url: string = 'http://localhost:8090/controlefinanceiro/patrimonio';
  
  constructor(private http: HttpClient) { }

  public selecionar(): Observable<Patrimonio[]> {
    return this.http.get<Patrimonio[]>(this.url);
  }

  public cadastrar(obj: Patrimonio): Observable<Patrimonio> {
    return this.http.post<Patrimonio>(this.url, obj);
  }

  public editar(obj: Patrimonio): Observable<Patrimonio> {
    return this.http.put<Patrimonio>(this.url, obj);
  }

  public remover(idPatrimonio: number): Observable<void> {
    return this.http.delete<void>(this.url + '/' + idPatrimonio);
  }
  
  public buscar(razaosocial: string): Observable<Patrimonio> {
    return this.http.get<Patrimonio>(this.url);
  }

  
}
