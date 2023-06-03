import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletinFronterizoComponent } from './boletin-fronterizo.component';

describe('BoletinFronterizoComponent', () => {
  let component: BoletinFronterizoComponent;
  let fixture: ComponentFixture<BoletinFronterizoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoletinFronterizoComponent]
    });
    fixture = TestBed.createComponent(BoletinFronterizoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
