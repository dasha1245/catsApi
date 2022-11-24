import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    request = this.addToken(request);
    return next.handle(request);
  }

  addToken(request: HttpRequest<any>): HttpRequest<any>{
    return request.clone({
      setHeaders:{'x-api-key' : 'live_05iVOZnJBnMvXucFc4LGZb53rpEWExBqwNrJjVKIP7xjq4hTzKENlr8pt7yhMhN8'}
    })
  }
}
