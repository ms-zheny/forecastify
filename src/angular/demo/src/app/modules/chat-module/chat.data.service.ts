import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ChatDataService {
  // ctor
  constructor(private http: HttpClient) {}

  getChatMessages(request:any): Observable<any> {
    return this.http.post(`${environment.apiConfig2.uri}/ChatCompletion`, request);
  }

  // // temp test
  // getItems(): Observable<any> {
  //   return this.http.get(`${environment.apiConfig2.uri}/items/private`);
  // }
}
