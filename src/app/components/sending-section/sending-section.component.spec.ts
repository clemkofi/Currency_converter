import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendingSectionComponent } from './sending-section.component';

describe('SendingSectionComponent', () => {
  let component: SendingSectionComponent;
  let fixture: ComponentFixture<SendingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendingSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
