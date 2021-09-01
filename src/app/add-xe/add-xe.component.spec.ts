import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddXeComponent } from './add-xe.component';

describe('AddXeComponent', () => {
  let component: AddXeComponent;
  let fixture: ComponentFixture<AddXeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddXeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddXeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
