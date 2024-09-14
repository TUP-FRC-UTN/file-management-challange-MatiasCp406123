import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerCircleComponent } from './owner-circle.component';

describe('OwnerCircleComponent', () => {
  let component: OwnerCircleComponent;
  let fixture: ComponentFixture<OwnerCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OwnerCircleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
