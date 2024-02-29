import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReassuranceComponent } from './card-reassurance.component';

describe('CardReassuranceComponent', () => {
  let component: CardReassuranceComponent;
  let fixture: ComponentFixture<CardReassuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardReassuranceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardReassuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
