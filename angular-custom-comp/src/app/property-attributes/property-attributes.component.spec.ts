import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyAttributesComponent } from './property-attributes.component';

describe('PropertyAttributesComponent', () => {
  let component: PropertyAttributesComponent;
  let fixture: ComponentFixture<PropertyAttributesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyAttributesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
