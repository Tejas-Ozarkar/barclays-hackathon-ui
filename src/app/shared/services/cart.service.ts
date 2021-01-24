import { Book } from './../models/book.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public booksInCart: Book[] = [];
  private cartSubject = new BehaviorSubject<Book[]>([]);
  public cart = this.cartSubject.asObservable();

  constructor() {
    this.booksInCart = this.getCartBooks() || [];
    this.updateCart();
  }

  public addToCart(book: Book) {
    this.booksInCart.push(book);
    this.updateCart();
  }

  public deleteFromCart(index: number) {
    this.booksInCart = this.booksInCart.filter((b, i) => i != index);
    console.log(this.booksInCart);
    this.updateCart();
  }

  private updateCart() {
    localStorage.setItem('cart-books', JSON.stringify(this.booksInCart));
    this.cartSubject.next(this.booksInCart);
  }

  public getCartBooks() {
    return JSON.parse(localStorage.getItem('cart-books'));
  }

  public clearCart() {
    localStorage.removeItem('cart-books');
    this.booksInCart = [];
    this.updateCart();
  }
}
