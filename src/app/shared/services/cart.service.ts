import { HttpClient } from '@angular/common/http';
import { Book } from './../models/book.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public booksInCart = [];

  private cartSubject = new BehaviorSubject<Book[]>([]);
  public cart = this.cartSubject.asObservable();

  constructor(private readonly http: HttpClient) {

  }

  public addToCart(book: Book): Observable<Book[]> {
    this.booksInCart.push(book);
    this.updateCart(this.booksInCart);
    return this.http.post<Book[]>(`${environment.api}/cart`, { id: book.id })
      .pipe(
        tap((cart) => {
          // this.updateCart(cart);
        })
      );
  }

  public deleteFromCart(book: Book, booksInCart): Observable<Book[]> {
    this.booksInCart = booksInCart;
    this.updateCart(this.booksInCart);
    return this.http.post<Book[]>(`${environment.api}/cart/delete`, { id: book.id })
      .pipe(
        tap((cart) => {
          // this.updateCart(cart);
        })
      );
  }

  private updateCart(cart) {
    this.cartSubject.next(cart);
  }

  public getCart(): Observable<Book[]> {
    return this.http.get<Book[]>(`${environment.api}/cart`)
      .pipe(
        tap((cart) => {
          this.booksInCart.push(...cart);
          this.updateCart(cart);
        })
      );
  }

  public clearCart(){
    this.booksInCart = [];
    return this.http.get(`${environment.api}/cart/clear`);
  }
}
