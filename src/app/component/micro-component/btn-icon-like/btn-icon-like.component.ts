import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-btn-icon-like',
  standalone: true,
  imports: [
    CommonModule,
    IconComponent
  ],
  templateUrl: './btn-icon-like.component.html',
  styleUrl: './btn-icon-like.component.css'
})

export class BtnIconLikeComponent implements OnInit {
  
  @Input() btnLikeClass: string = '';
  @Input() iconClass: string = '';

  private static counter = 0;
  id: string;
  liked: boolean = false;

  constructor(private cookieService: CookieService) {
    BtnIconLikeComponent.counter++;
    this.id = `likeBtn_${BtnIconLikeComponent.counter}`;
  }

  ngOnInit(): void {
    this.checkLikedStatus();
  }

  checkLikedStatus(): void {
    this.liked = this.cookieService.check(this.id);
    if (this.liked) {
      this.liked = true;
    }
  }

  toggleLike(): void {
    this.liked = !this.liked;
    if (this.liked) {
      this.cookieService.set(this.id, 'true', 30);
    } else {
      this.cookieService.delete(this.id);
    }
  }
}
