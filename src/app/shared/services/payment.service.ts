import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { Payment } from './../models/payment.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaymentUrl } from '../models/payment-url.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private readonly http: HttpClient) { }

  public makePayment(payment: Payment): Observable<PaymentUrl> {
    return this.http.post<PaymentUrl>(`${environment.api}/payment`, payment);
  }
}
