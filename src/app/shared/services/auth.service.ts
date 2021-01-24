import { environment } from './../../../environments/environment';
import { User } from './../models/user.model';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDetails } from '../models/user_details.model';
import { JWT } from '../models/jwt.model';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly http: HttpClient
  ) { }

  public signIn(user: User): Observable<UserDetails> {
    return this.http.post<UserDetails>(`${environment.api}/auth/signin`, user, { headers: { skip: 'true' } })
      .pipe(
        tap(res => this.setSession),
        shareReplay());
  }

  public signUp(userDetails: UserDetails): Observable<JWT> {
    return this.http.post<JWT>(`${environment.api}/auth/signup`, userDetails, { headers: { skip: 'true' } });
  }

  public getCurrentUser(): Observable<UserDetails> {
    return this.http.get<UserDetails>(`${environment.api}/auth/user`);
  }

  public setSession(authResult) {
    const expiresAt = moment().add(36000, 'second');

    localStorage.setItem('id_token', authResult.jwt);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }

  public logout() {
    console.log('logging out');
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  public isLoggedOut() {
    return !this.isLoggedIn();
  }

  public getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
