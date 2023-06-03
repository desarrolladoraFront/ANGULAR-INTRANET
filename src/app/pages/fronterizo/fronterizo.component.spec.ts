import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FronterizoComponent } from './fronterizo.component';

describe('FronterizoComponent', () => {
  let component: FronterizoComponent;
  let fixture: ComponentFixture<FronterizoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FronterizoComponent]
    });
    fixture = TestBed.createComponent(FronterizoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
