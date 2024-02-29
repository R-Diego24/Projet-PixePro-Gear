import { Component, OnInit } from '@angular/core';
import { CardReassuranceComponent } from '../../micro-component/cards/card-reassurance/card-reassurance.component';
import { CommonModule } from '@angular/common';
import { ReassuranceService, ReassuranceItem } from '../../../reassurance.service';


@Component({
  selector: 'app-reassurance',
  standalone: true,
  imports: [
    CardReassuranceComponent,
    CommonModule
  ],
  templateUrl: './reassurance.component.html',
  styleUrl: './reassurance.component.css'
})

export class ReassuranceComponent implements OnInit {

  items: ReassuranceItem[] = [];

  constructor(private reassuranceService: ReassuranceService) { }

  ngOnInit() {
    this.items = this.reassuranceService.getItems();
  }

}
