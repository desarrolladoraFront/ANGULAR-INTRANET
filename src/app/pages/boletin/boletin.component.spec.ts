import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletinComponent } from './boletin.component';

describe('BoletinComponent', () => {
  let component: BoletinComponent;
  let fixture: ComponentFixture<BoletinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoletinComponent]
    });
    fixture = TestBed.createComponent(BoletinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
