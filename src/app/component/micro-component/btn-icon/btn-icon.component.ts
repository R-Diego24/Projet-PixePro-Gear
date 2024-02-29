import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-btn-icon',
  standalone: true,
  imports: [
    CommonModule,
    IconComponent
  ],
  templateUrl: './btn-icon.component.html',
  styleUrl: './btn-icon.component.css'
})
export class BtnIconComponent {
  @Input() btnClass: string = '';
  @Input() iconClass: string = '';
}
