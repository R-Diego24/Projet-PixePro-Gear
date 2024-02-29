import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProductComponent } from '../../micro-component/cards/card-product/card-product.component';
import { TitleComponent } from '../../micro-component/title/title.component';
import { SubtitleComponent } from '../../micro-component/subtitle/subtitle.component';
import { CartService } from '../../../cart.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-products-cards',
  standalone: true,
  imports: [
    CommonModule,
    CardProductComponent,
    TitleComponent,
    SubtitleComponent,
    ModalComponent
  ],
  templateUrl: './products-cards.component.html',
  styleUrl: './products-cards.component.css'
})
export class ProductsCardsComponent {
  @Input() products: any[] = [];
  @Input() classWCard: string = '';

  showModal: boolean = false;
  modalTitle: string = '';
  modalMessage: string = '';

  @Output() cartEvent = new EventEmitter<any>();

  constructor(private cartService: CartService) {}

  handleAddToCart(product: any): void {
    this.cartService.addToCart({
      id: product.id,
      brand: product.brand,
      model: product.model,
      price: product.price,
      quantity: 1
    });

    this.showModal = false;
    setTimeout(() => {
        this.showModal = true;
        this.modalTitle = 'Produit ajouté au panier';
        this.modalMessage = `Le produit ${product.brand} ${product.model} a été ajouté à votre panier.`;
    }, 10);

  }
  
}
