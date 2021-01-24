import { Router } from '@angular/router';
import { AuthService } from './../../shared/services/auth.service';
import { Book } from './../../shared/models/book.model';
import { CartService } from './../../shared/services/cart.service';
import { AfterViewChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public cartCount:number;
  public isLoggedIn: boolean;
  constructor(
    private router: Router,
    private readonly cartService: CartService,
    private readonly authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.cartService.cart.subscribe(books=>{
      this.cartCount = books.length || 0;
    });
  }
  
  ngAfterViewChecked(){
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  public logout(){
    this.authService.logout();
    this.isLoggedIn = false;
    this.router.navigateByUrl('/home');
  }
}
