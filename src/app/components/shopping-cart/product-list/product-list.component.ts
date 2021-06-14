import { WishlistService } from './../../../services/wishlist.service';
import { Product } from './../../../models/product';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  wishlist: number[] = [];

  constructor(
    private productService: ProductService, 
    private wishlistService: WishlistService,
    ) {}

  ngOnInit(){
   this.loadProducts();
   this.loadWishlist();
  }

  loadProducts(){
    this.productService.getProducts().subscribe((products) => {
      this.products = products;

    });
  }

  loadWishlist(){
    this.wishlistService.getWishlist().subscribe(productIds => { 
      this.wishlist = productIds 
    });
  }
}
