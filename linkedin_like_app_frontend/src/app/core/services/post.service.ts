import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  /**
   * Constructor
   * @param http instance of HTTP Client
   */
  constructor(private http: HttpClient) {}

  /**
   * Creates new post
   * @param formData Post data
   */
  createPost(formData: any) {
    let url = `${environment.apiUrl}/Account/Login`;
    return this.http.post<any>(url, formData).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
