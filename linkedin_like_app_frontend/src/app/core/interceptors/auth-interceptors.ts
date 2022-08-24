import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { User } from "../models/user";
import { AuthService } from "../services/auth.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  loggedInUser: User;

  constructor(private authentication: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.loggedInUser === undefined || this.loggedInUser === null) {
      this.authentication.currentUser.subscribe(user => { this.loggedInUser = user; });
    }

    if (this.loggedInUser && this.loggedInUser.token) {
      request = request.clone({
        setHeaders: {
          authorization: `Bearer ${this.loggedInUser.token}`,
          user: `${this.loggedInUser}`
        }
      });
    }
    return next.handle(request);
  }
}
