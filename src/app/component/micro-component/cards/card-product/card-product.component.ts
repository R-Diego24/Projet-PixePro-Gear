import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ImgComponent } from '../../img/img.component';
import { TitleComponent } from '../../title/title.component';
import { TextComponent } from '../../text/text.component';
import { SubtitleComponent } from '../../subtitle/subtitle.component';
import { BtnIconComponent } from '../../btn-icon/btn-icon.component';
import { BtnIconLikeComponent } from '../../btn-icon-like/btn-icon-like.component';

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [
    CommonModule,
    ImgComponent,
    TitleComponent,
    SubtitleComponent,
    TextComponent,
    BtnIconComponent,
    BtnIconLikeComponent,
    RouterModule
  ],
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})

export class CardProductComponent implements OnInit {

  @Input() product: any;
  @Output() addToCartEvent = new EventEmitter<any>();
  
  backgroundClass: string = '';
  backgroundClasses = ['background-1', 'background-2', 'background-3'];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.selectRandomBackground();
  }

  selectRandomBackground(): void {
    const randomIndex = Math.floor(Math.random() * this.backgroundClasses.length);
    this.backgroundClass = this.backgroundClasses[randomIndex];
  }

  navigate(product: any, event: MouseEvent): void {
    event.stopPropagation();
    this.router.navigate(['/product', product.id]);
  }

  emitAddToCartEvent(event: Event): void {
    event.stopPropagation();
    this.addToCartEvent.emit(this.product);
  }

  likeProduct(event: Event, productId: number): void {
    event.stopPropagation();
  }
}