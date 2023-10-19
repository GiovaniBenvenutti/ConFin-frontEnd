import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patrimonio } from '../model/patrimonio.component';
import { Observable, delay, finalize, first, interval, switchMap, take, tap } from 'rxjs';
import { Entidade } from '../model/entidades.component';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PatrimonioService {

  private url: string = 'http://localhost:8090/controlefinanceiro/patrimonio';
  
  constructor(private http: HttpClient) { }
    
  /*
  public verificarBackend(): Observable<Patrimonio[]> {
    return interval(10000).pipe(
      switchMap(() => this.selecionar())
    );
  }*/

  public selecionar(): Observable<Patrimonio[]> {  
    return this.http.get<Patrimonio[]>(this.url).pipe(
      catchError(error => {
        //console.error('Erro ao buscar patrimônios aquiiiiiiiii:', error);
        alert('verifique sua conexão com o servidor');
        // Em seguida, re-throw o erro para que qualquer inscrição também receba o erro
        return throwError(error);
      })
    );
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
