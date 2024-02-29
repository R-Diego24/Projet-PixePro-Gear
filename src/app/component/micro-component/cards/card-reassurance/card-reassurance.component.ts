import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TextComponent } from '../../text/text.component';
import { IconComponent } from '../../icon/icon.component';
import { ReassuranceItem } from '../../../../reassurance.service';
import { TitleComponent } from '../../title/title.component';

@Component({
  selector: 'app-card-reassurance',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
    TextComponent,
    IconComponent
  ],
  templateUrl: './card-reassurance.component.html',
  styleUrl: './card-reassurance.component.css'
})

export class CardReassuranceComponent {

  @Input() item: ReassuranceItem = { icon: "",title: "", text: "" };

}
