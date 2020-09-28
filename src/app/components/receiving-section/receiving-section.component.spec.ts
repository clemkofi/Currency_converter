import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivingSectionComponent } from './receiving-section.component';

describe('ReceivingSectionComponent', () => {
  let component: ReceivingSectionComponent;
  let fixture: ComponentFixture<ReceivingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceivingSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
