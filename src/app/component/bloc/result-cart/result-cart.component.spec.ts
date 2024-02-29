import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultCartComponent } from './result-cart.component';

describe('ResultCartComponent', () => {
  let component: ResultCartComponent;
  let fixture: ComponentFixture<ResultCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
