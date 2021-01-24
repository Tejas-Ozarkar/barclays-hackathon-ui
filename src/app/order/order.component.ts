import { OrderService } from './../shared/services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orders = {};
  orderIds=[];
  public showLoader = false;
  constructor(private readonly orderService: OrderService) { }

  ngOnInit(): void {
    this.showLoader = true;
    this.orderService.getOrders().subscribe((orders: any[]) => {
      this.showLoader = false;
      orders.forEach(order => {
        let orderId = order['id'];
        if(!this.orderIds.includes(orderId)){
          this.orderIds.push(orderId);
        }
        if (!this.orders[orderId]) {
          this.orders[orderId] = [];
        }
        this.orders[orderId].push(order);
      });
      console.log(this.orders);
    })
  }

}
