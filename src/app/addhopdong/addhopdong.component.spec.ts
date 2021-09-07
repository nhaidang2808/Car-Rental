import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhopdongComponent } from './addhopdong.component';

describe('AddhopdongComponent', () => {
  let component: AddhopdongComponent;
  let fixture: ComponentFixture<AddhopdongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddhopdongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhopdongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
