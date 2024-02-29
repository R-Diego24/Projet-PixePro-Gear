import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../../component/micro-component/title/title.component';
import { TextComponent } from '../../component/micro-component/text/text.component';
import { ButtonComponent } from '../../component/micro-component/button/button.component';
import { SubtitleComponent } from '../../component/micro-component/subtitle/subtitle.component';

@Component({
  selector: 'app-connect',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
    SubtitleComponent,
    TextComponent,
    ButtonComponent
  ],
  templateUrl: './connect.component.html',
  styleUrl: './connect.component.css'
})
export class ConnectComponent {

}
