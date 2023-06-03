import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefaccionPublicoComponent } from './refaccion-publico.component';

describe('RefaccionPublicoComponent', () => {
  let component: RefaccionPublicoComponent;
  let fixture: ComponentFixture<RefaccionPublicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefaccionPublicoComponent]
    });
    fixture = TestBed.createComponent(RefaccionPublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
