import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalEntidadeComponent } from './entidades.cadastrar';

describe('PrincipalEntidadeComponent', () => {
  let component: PrincipalEntidadeComponent;
  let fixture: ComponentFixture<PrincipalEntidadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrincipalEntidadeComponent]
    });
    fixture = TestBed.createComponent(PrincipalEntidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
