import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IconComponent
  ],
  templateUrl: './link.component.html',
  styleUrl: './link.component.css'
})
export class LinkComponent {
  @Input() linkText: string = '';
  @Input() classLink: string = '';
  @Input() href: string = '';
  @Input() iconClass: string = '';
}
