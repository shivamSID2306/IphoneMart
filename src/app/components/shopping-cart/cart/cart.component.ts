import { CartItem } from './../../../models/cart-item';
import { CartService } from './../../../services/cart.service';
import { Product } from './../../../models/product';
import { MessengerService } from './../../../services/messenger.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];
  cartTotal = 0;

  constructor(private messengerService: MessengerService, private cartService: CartService) { }

  ngOnInit(){
    this.handleSubscription();
    this.loadCartItems();
  }

  handleSubscription(){
    this.messengerService.getMsg().subscribe((product: Product) => {
      this.loadCartItems();
    })
  }

  loadCartItems(){
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.calculateCartTotal();
    })
  }

  calculateCartTotal(){
    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }
}
