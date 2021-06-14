import { WishlistService } from './../../../../services/wishlist.service';
import { CartService } from './../../../../services/cart.service';
import { MessengerService } from './../../../../services/messenger.service';
import { Product } from './../../../../models/product';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product;
  @Input() isTouched: boolean;

  constructor(
    private messengerService: MessengerService, 
    private cartService: CartService,
    private wishlistService: WishlistService
    ) { }

  ngOnInit() {
  }

  handleAddToCart(){
    this.cartService.addProductToCart(this.productItem).subscribe(() => {  //this is used to add product to json/api and then subscribe to tell the card component about the productItem.
      this.messengerService.sendMsg(this.productItem)
    })
  }

  handleAddToWishlist(){
    this.wishlistService.addToWishlist(this.productItem.id).subscribe(() => {
      this.isTouched = !this.isTouched
    })
  }

  handleRemoveToWishlist(){
    this.wishlistService.removeFromWishlist(this.productItem.id).subscribe(() => {
      this.isTouched = !this.isTouched
    })
  }
}
