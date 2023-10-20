import { Observable, finalize, catchError, throwError, retryWhen, delay, tap } from 'rxjs';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SpinnerService } from './spinner.servise';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
    private activeRequests = 0;
    private hasErrorBeenShown = false; // Variável de controle

    constructor(){ }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
       
        return next.handle(request).pipe(
            catchError((erro: HttpErrorResponse) => {
                console.log(erro)
                if (!this.hasErrorBeenShown) { // Verifica se a mensagem de erro já foi exibida
                    alert('Erro na conexão ou servidor indisponível')
                    this.hasErrorBeenShown = true; // Atualiza a variável de controle
                }
                return throwError(() => new Error(''));
            }),
            retryWhen(errors => errors.pipe(
                delay(5000), 
                tap(() => this.hasErrorBeenShown = false) // Redefine a variável de controle para false
            ))
        );
    }
}
