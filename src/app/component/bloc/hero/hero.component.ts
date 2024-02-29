import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ImgComponent } from '../../micro-component/img/img.component';
import { TitleComponent } from '../../micro-component/title/title.component';
import { TextComponent } from '../../micro-component/text/text.component';
import { ButtonComponent } from '../../micro-component/button/button.component';
import { SubtitleComponent } from '../../micro-component/subtitle/subtitle.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,
    ImgComponent,
    TitleComponent,
    TextComponent,
    ButtonComponent,
    SubtitleComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  @Input() imgClass: string = '';
}
