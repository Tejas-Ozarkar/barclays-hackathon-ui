import { CartService } from './../shared/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements OnInit {

  public status: string;

  constructor(private readonly route: ActivatedRoute, private readonly cartService: CartService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(resp=>{
      if(resp.payment_status === 'Credit'){
        this.status = 'success';
        this.cartService.clearCart().subscribe();
      }else{
        this.status = 'failed';

      }
    });
  }

}
