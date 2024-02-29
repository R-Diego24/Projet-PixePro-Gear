import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReassuranceComponent } from './reassurance.component';

describe('ReassuranceComponent', () => {
  let component: ReassuranceComponent;
  let fixture: ComponentFixture<ReassuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReassuranceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReassuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
