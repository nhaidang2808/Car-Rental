import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditKhachHangComponent } from './edit-khach-hang.component';

describe('EditKhachHangComponent', () => {
  let component: EditKhachHangComponent;
  let fixture: ComponentFixture<EditKhachHangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditKhachHangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditKhachHangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
