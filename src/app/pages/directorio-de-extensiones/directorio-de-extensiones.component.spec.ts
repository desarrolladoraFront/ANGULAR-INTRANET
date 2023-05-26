import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorioDeExtensionesComponent } from './directorio-de-extensiones.component';

describe('DirectorioDeExtensionesComponent', () => {
  let component: DirectorioDeExtensionesComponent;
  let fixture: ComponentFixture<DirectorioDeExtensionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectorioDeExtensionesComponent]
    });
    fixture = TestBed.createComponent(DirectorioDeExtensionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
