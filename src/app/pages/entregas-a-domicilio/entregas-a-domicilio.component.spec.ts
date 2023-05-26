import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregasADomicilioComponent } from './entregas-a-domicilio.component';

describe('EntregasADomicilioComponent', () => {
  let component: EntregasADomicilioComponent;
  let fixture: ComponentFixture<EntregasADomicilioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntregasADomicilioComponent]
    });
    fixture = TestBed.createComponent(EntregasADomicilioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
