import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../micro-component/button/button.component';


@Component({
  selector: 'app-btn-large',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent
  ],
  templateUrl: './btn-large.component.html',
  styleUrl: './btn-large.component.css'
})
export class BtnLargeComponent {

}
