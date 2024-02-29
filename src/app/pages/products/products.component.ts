import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsCardsComponent } from '../../component/bloc/products-cards/products-cards.component';
import { CartService, CartItem } from '../../cart.service';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    ProductsCardsComponent
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  products: any[] = [];

  constructor(
    private productService: ProductService, 
    private cartService: CartService
  ) { }

  ngOnInit() {
    
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  addToCart(product: any) {
    const item: CartItem = {
      id: product.id,
      brand: product.brand,
      model: product.model,
      price: product.price,
      quantity: 1
    };
  
    this.cartService.addToCart(item);
  }
}
