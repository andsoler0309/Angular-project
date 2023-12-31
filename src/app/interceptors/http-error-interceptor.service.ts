import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

 @Injectable()
export class HttpErrorInterceptorService extends HttpErrorResponse {
  constructor(private toastrService: ToastrService) { super(toastrService); }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((httpErrorResponse: HttpErrorResponse) => {
          let errorMesagge = '';
          let errorType = '';

          if (httpErrorResponse.error instanceof ErrorEvent) {
            errorType = 'Client side error';
            errorMesagge = httpErrorResponse.error.error;
          } else {
            errorType = 'Server side error';
            if (httpErrorResponse.status === 0) {
              errorMesagge = 'No hay conexión con el servidor';
            }
            else if (httpErrorResponse.status === 412){
              errorMesagge = 'Sponsor already has an exhibition';
            }
            else {
              errorMesagge = `${httpErrorResponse.status}: ${httpErrorResponse.error.error}`;
            }
            this.toastrService.error(errorMesagge, errorType, { closeButton: true });
          }
          return throwError(()=> new Error(errorMesagge));
        })
      );
  }
}
