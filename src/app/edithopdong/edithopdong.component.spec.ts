import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdithopdongComponent } from './edithopdong.component';

describe('EdithopdongComponent', () => {
  let component: EdithopdongComponent;
  let fixture: ComponentFixture<EdithopdongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdithopdongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdithopdongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
