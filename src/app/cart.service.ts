import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';

export interface CartItem {
  id: number;
  brand: string;
  model: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  public cartItems$: Observable<CartItem[]> = this.cartItemsSubject.asObservable();

  constructor(private cookieService: CookieService) {
    this.loadInitialCart();
  }

  private loadInitialCart() {
    const cart = this.getCartItems();
    this.cartItemsSubject.next(cart);
  }

  getCartItems(): CartItem[] {
    const cart = this.cookieService.get('cart');
    return cart ? JSON.parse(cart) : [];
  }

  addToCart(item: CartItem) {
    const cart = this.getCartItems();
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += item.quantity;
      cart[existingItemIndex].brand = item.brand;
      cart[existingItemIndex].model = item.model;
    } else {
      cart.push(item);
    }
    this.cookieService.set('cart', JSON.stringify(cart));
    this.cartItemsSubject.next(cart);
  }

  removeFromCart(itemId: number) {
    let cart = this.getCartItems();
    cart = cart.filter(item => item.id !== itemId);
    this.cookieService.set('cart', JSON.stringify(cart));
    this.cartItemsSubject.next(cart);
  }

  updateQuantity(itemId: number, quantity: number) {
    let cart = this.getCartItems();
    const itemIndex = cart.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
      cart[itemIndex].quantity = quantity;
      this.cookieService.set('cart', JSON.stringify(cart));
      this.cartItemsSubject.next(cart);
    }
  }

  clearCart() {
    this.cookieService.delete('cart');
    this.cartItemsSubject.next([]);
  }
}

