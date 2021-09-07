import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhangxeComponent } from './addhangxe.component';

describe('AddhangxeComponent', () => {
  let component: AddhangxeComponent;
  let fixture: ComponentFixture<AddhangxeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddhangxeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhangxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
