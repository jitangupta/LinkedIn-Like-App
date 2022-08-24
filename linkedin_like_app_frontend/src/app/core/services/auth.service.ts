import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  /**
   * Constructor
   * @param http instance of HTTP Client
   */
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private http: HttpClient
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.currentUserSubject = new BehaviorSubject<User>(
        JSON.parse(localStorage.getItem('currentUser') || '{}')
      );
      this.currentUser = this.currentUserSubject.asObservable();
    }
  }

  public get currentUserValue(): User | null {
    if (this.currentUserSubject === undefined) {
      return null;
    }
    return this.currentUserSubject.value;
  }

  /**
   * login request from user
   * @param formData login form data
   */
  login(formData: any) {
    let url = `${environment.apiUrl}/Account/Login`;
    return this.http.post<any>(url, formData).pipe(
      map((res) => {
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('currentUser', JSON.stringify(res));
        }
        this.currentUserSubject.next(res);
        return res;
      })
    );
  }
}
