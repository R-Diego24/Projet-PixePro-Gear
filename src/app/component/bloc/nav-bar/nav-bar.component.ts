import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgComponent } from '../../micro-component/img/img.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    CommonModule,
    ImgComponent,
    MenuComponent
  ],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

}
