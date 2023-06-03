import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletinDistribuidorComponent } from './boletin-distribuidor.component';

describe('BoletinDistribuidorComponent', () => {
  let component: BoletinDistribuidorComponent;
  let fixture: ComponentFixture<BoletinDistribuidorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoletinDistribuidorComponent]
    });
    fixture = TestBed.createComponent(BoletinDistribuidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
