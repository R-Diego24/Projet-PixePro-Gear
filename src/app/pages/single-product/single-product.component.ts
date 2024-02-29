import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../product.service';
import { CartService, CartItem } from '../../cart.service';
import { TitleComponent } from '../../component/micro-component/title/title.component';
import { TextComponent } from '../../component/micro-component/text/text.component';
import { ImgComponent } from '../../component/micro-component/img/img.component';
import { ButtonComponent } from '../../component/micro-component/button/button.component';
import { SubtitleComponent } from '../../component/micro-component/subtitle/subtitle.component';
import { BtnLargeComponent } from '../../component/bloc/btn-large/btn-large.component';
import { ReassuranceComponent } from '../../component/bloc/reassurance/reassurance.component';
import { ModalComponent } from '../../component/bloc/modal/modal.component';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
    SubtitleComponent,
    TextComponent,
    ImgComponent,
    ButtonComponent,
    BtnLargeComponent,
    ReassuranceComponent,
    ModalComponent
  ],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent implements OnInit{

  product: any;
  showModal: boolean = false;
  modalTitle: string = '';
  modalMessage: string = '';

  backgroundClass: string = '';

  backgroundClasses = ['background-1', 'background-2', 'background-3'];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
  ) {}

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productService.getProductById(+productId).subscribe(product => {
        this.product = product;
      });
    }

    this.selectRandomBackground();
  }

  selectRandomBackground(): void {
    const randomIndex = Math.floor(Math.random() * this.backgroundClasses.length);
    this.backgroundClass = this.backgroundClasses[randomIndex];
  }

  addToCart(product: any) {
    const cartItem: CartItem = {
        id: product.id,
        brand: product.brand,
        model: product.model,
        price: product.price,
        quantity: 1,
    };

    this.cartService.addToCart(cartItem);

    this.showModal = false;
    setTimeout(() => {
        this.showModal = true;
        this.modalTitle = 'Produit ajouté au panier';
        this.modalMessage = `Le produit ${product.brand} ${product.model} a été ajouté à votre panier.`;
    }, 10);
  }

}

