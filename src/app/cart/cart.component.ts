import { PaymentService } from './../shared/services/payment.service';
import { Book } from './../shared/models/book.model';
import { CartService } from './../shared/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public booksInCart: Book[];
  public totalCost;

  constructor(private readonly cartService: CartService,
    private readonly paymentService: PaymentService) { }

  ngOnInit(): void {
    this.cartService.cart.subscribe(books=>{
      this.totalCost = 0;
      this.booksInCart = books;
      this.booksInCart.forEach(book=>this.totalCost+=book.price);
    });

  }

  public removeFromCart(index: number){
    this.cartService.deleteFromCart(index);
  }

  public payment(){
    this.paymentService.makePayment({
      amount: this.totalCost,
      books: this.booksInCart.map(b=>b.id)
    }).subscribe(resp=>window.open(resp.url, "_self"));
  }
}
