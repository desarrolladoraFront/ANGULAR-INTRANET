import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefaccionDistribuidorComponent } from './refaccion-distribuidor.component';

describe('RefaccionDistribuidorComponent', () => {
  let component: RefaccionDistribuidorComponent;
  let fixture: ComponentFixture<RefaccionDistribuidorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefaccionDistribuidorComponent]
    });
    fixture = TestBed.createComponent(RefaccionDistribuidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
