import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveroFormComponent } from './archivero-form.component';

describe('ArchiveroFormComponent', () => {
  let component: ArchiveroFormComponent;
  let fixture: ComponentFixture<ArchiveroFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchiveroFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchiveroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
