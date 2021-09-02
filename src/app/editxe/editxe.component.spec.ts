import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditxeComponent } from './editxe.component';

describe('EditxeComponent', () => {
  let component: EditxeComponent;
  let fixture: ComponentFixture<EditxeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditxeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
