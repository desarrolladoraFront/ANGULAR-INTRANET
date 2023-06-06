import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicoComponent } from './publico.component';

describe('PublicoComponent', () => {
  let component: PublicoComponent;
  let fixture: ComponentFixture<PublicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicoComponent]
    });
    fixture = TestBed.createComponent(PublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
