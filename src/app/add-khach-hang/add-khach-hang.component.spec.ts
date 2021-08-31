import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKhachHangComponent } from './add-khach-hang.component';

describe('AddKhachHangComponent', () => {
  let component: AddKhachHangComponent;
  let fixture: ComponentFixture<AddKhachHangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddKhachHangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKhachHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
