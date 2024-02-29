import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../cart.service';
import { RouterModule } from '@angular/router';
import { ResultCartComponent } from '../../component/bloc/result-cart/result-cart.component';
import { TitleComponent } from '../../component/micro-component/title/title.component';
import { TextComponent } from '../../component/micro-component/text/text.component';
import { ButtonComponent } from '../../component/micro-component/button/button.component';
import { BtnIconComponent } from '../../component/micro-component/btn-icon/btn-icon.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ResultCartComponent,
    TitleComponent,
    TextComponent,
    ButtonComponent,
    BtnIconComponent
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent implements OnInit {
  
  cartItems: any[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

  removeFromCart(itemId: number) {
    this.cartService.removeFromCart(itemId);
    this.cartItems = this.cartService.getCartItems();
  }

  updateQuantity(itemId: number, newQuantity: number) {
    if (newQuantity < 1) {
      this.removeFromCart(itemId);
    } else {
      this.cartService.updateQuantity(itemId, newQuantity);
    }
    this.cartItems = this.cartService.getCartItems();
  }
  

  clearCart() {
    this.cartService.clearCart();
    this.cartItems = [];
  }

}
