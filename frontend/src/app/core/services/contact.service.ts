import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = `${environment.apiUrl}/api/portfolio`;

  constructor(private http: HttpClient) {}

  sendMessage(payload: ContactPayload): Observable<string> {
    return this.http.post(this.apiUrl, payload, { responseType: 'text' });
  }
}
