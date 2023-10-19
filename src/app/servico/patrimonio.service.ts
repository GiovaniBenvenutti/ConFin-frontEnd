import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patrimonio } from '../model/patrimonio.component';
import { Observable, delay, finalize, first, interval, switchMap, take, tap } from 'rxjs';
import { Entidade } from '../model/entidades.component';


@Injectable({
  providedIn: 'root'
})
export class PatrimonioService {

  private url: string = 'http://localhost:8090/controlefinanceiro/patrimonio';
  
  //loadingService = false;

  constructor(private http: HttpClient) { }

  
public verificarBackend(): Observable<Patrimonio[]> {
  return interval(10000).pipe(
    switchMap(() => this.selecionar())
  );
}

  public selecionar(): Observable<Patrimonio[]> {  

  //this.loadingService = true;  
    return this.http.get<Patrimonio[]>(this.url).pipe( 
      //first(),
      //delay(1000),
      //finalize(() => this.loadingService = false)
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
