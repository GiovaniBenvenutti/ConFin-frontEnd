import { Observable, finalize } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SpinnerService } from './spinner.servise';



@Injectable()
export class LoadingInterceptor implements HttpInterceptor{
    private activeRequests = 0;

    constructor(private loadingService: SpinnerService){ }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        if(this.activeRequests === 0) {
            this.loadingService.show();
        }
        this.activeRequests++;

        return next.handle(request).pipe(
            finalize(() => {
                this.activeRequests--;

                if(this.activeRequests === 0) {
                    this.loadingService.hide();
                }
            })


        )


    }

}