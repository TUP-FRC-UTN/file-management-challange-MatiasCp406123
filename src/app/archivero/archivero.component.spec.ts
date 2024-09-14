import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveroComponent } from './archivero.component';

describe('ArchiveroComponent', () => {
  let component: ArchiveroComponent;
  let fixture: ComponentFixture<ArchiveroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchiveroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchiveroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
