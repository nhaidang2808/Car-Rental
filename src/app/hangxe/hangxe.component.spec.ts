import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangxeComponent } from './hangxe.component';

describe('HangxeComponent', () => {
  let component: HangxeComponent;
  let fixture: ComponentFixture<HangxeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HangxeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HangxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
