import { AuthService } from './../services/auth.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private readonly authService: AuthService){}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.headers.get('skip')) {
      return next.handle(request);
    }
    const AuthToken = localStorage.getItem('id_token');

    request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${AuthToken}`,
      },
    });
    return next.handle(request);
  }

}