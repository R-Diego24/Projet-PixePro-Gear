import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../../micro-component/title/title.component';
import { TextComponent } from '../../micro-component/text/text.component';
import { ButtonComponent } from '../../micro-component/button/button.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
    TextComponent,
    ButtonComponent
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})

export class ModalComponent {

  @Input() show: boolean = false;
  @Input() title: string = '';
  @Input() message: string = '';

  close() {
    this.show = false;
  }

}