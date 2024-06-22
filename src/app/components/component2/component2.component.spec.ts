import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component2Component } from './component2.component';

describe('Component2Component', () => {
  let component: Component2Component;
  let fixture: ComponentFixture<Component2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Component2Component]
    });
    fixture = TestBed.createComponent(Component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
