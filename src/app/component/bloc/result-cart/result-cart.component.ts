import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../cart.service';
import { TitleComponent } from '../../micro-component/title/title.component';
import { TextComponent } from '../../micro-component/text/text.component';
import { ButtonComponent } from '../../micro-component/button/button.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-result-cart',
  standalone: true,
  imports: [
  CommonModule,
  TitleComponent,
  TextComponent,
  ButtonComponent
  ],
  templateUrl: './result-cart.component.html',
  styleUrl: './result-cart.component.css'
})
export class ResultCartComponent implements OnInit{
  private subscription = new Subscription();
  cartItems: any[] = [];
  total: number = 0;
  totalItems: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.subscription.add(
      this.cartService.cartItems$.subscribe(items => {
        this.cartItems = items;
        this.calculateTotal();
        this.calculateTotalItems();
      })
    );
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  calculateTotal() {
    const cartItems = this.cartService.getCartItems();
    this.total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }

  calculateTotalItems() {
    this.totalItems = this.cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }
}





