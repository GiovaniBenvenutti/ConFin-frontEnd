import { Observable, finalize, catchError, throwError, retryWhen, delay } from 'rxjs';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SpinnerService } from './spinner.servise';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
    private activeRequests = 0;

    constructor(){ }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
       
        return next.handle(request).pipe(
            catchError((erro: HttpErrorResponse) => {
                console.log(erro)
                alert('Erro na conexão ou servidor indisponível')
                return throwError(() => new Error(''));
            }),
            retryWhen(errors => errors.pipe(delay(5000))), // Aguarda 2 segundos antes de tentar novamente
            catchError((erro: HttpErrorResponse) => {
                console.log(erro)
                alert('Erro na conexão ou servidor indisponível')
                return throwError(() => new Error(''));
            })
        );
    }
}
