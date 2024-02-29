import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnIconLikeComponent } from './btn-icon-like.component';

describe('BtnIconLikeComponent', () => {
  let component: BtnIconLikeComponent;
  let fixture: ComponentFixture<BtnIconLikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnIconLikeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnIconLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
