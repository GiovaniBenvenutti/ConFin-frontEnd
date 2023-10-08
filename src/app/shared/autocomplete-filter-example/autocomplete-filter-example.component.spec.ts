import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteFilterExample } from './autocomplete-filter-example.component';

describe('AutocompleteFilterExampleComponent', () => {
  let component: AutocompleteFilterExample;
  let fixture: ComponentFixture<AutocompleteFilterExample>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutocompleteFilterExample]
    });
    fixture = TestBed.createComponent(AutocompleteFilterExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
