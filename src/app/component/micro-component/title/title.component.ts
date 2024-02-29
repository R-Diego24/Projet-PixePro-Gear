import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})

export class TitleComponent {
  @Input() title: string = '';
  @Input() level: string = '';
  @Input() classTitle: string = '';
}
