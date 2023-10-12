import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent2 } from './table2.component';

describe('TableComponent', () => {
  let component: TableComponent2;
  let fixture: ComponentFixture<TableComponent2>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableComponent2]
    });
    fixture = TestBed.createComponent(TableComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
