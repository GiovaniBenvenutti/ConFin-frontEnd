import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDropComponent } from './select-drop.component';

describe('SelectDropComponent', () => {
  let component: SelectDropComponent;
  let fixture: ComponentFixture<SelectDropComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectDropComponent]
    });
    fixture = TestBed.createComponent(SelectDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
