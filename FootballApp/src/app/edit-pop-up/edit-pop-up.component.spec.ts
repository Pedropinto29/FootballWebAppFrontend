import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPopUpComponent } from './edit-pop-up.component';

describe('EditPopUpComponent', () => {
  let component: EditPopUpComponent;
  let fixture: ComponentFixture<EditPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
