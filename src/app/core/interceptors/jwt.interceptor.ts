import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = localStorage.getItem("token");
        console.log('INTERCEPTOR', token)
        request = request.clone({
            setHeaders: { Authorization: `Bearer ${token}` }
        });
        return next.handle(request);
    }
}

export const InterceptorProvider = {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true};