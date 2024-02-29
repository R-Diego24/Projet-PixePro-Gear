import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkComponent } from '../../micro-component/link/link.component';
import { ButtonComponent } from '../../micro-component/button/button.component';
import { IconComponent } from '../../micro-component/icon/icon.component';
import { ImgComponent } from '../../micro-component/img/img.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    LinkComponent,
    CommonModule,
    ButtonComponent,
    IconComponent,
    ImgComponent
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})

export class MenuComponent {
  @Input() className: string = '';
  mobileMenuActive = false;

  toggleMobileMenu() {
    this.mobileMenuActive = !this.mobileMenuActive;
  }
}
