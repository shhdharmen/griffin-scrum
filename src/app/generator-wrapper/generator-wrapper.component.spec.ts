import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorWrapperComponent } from './generator-wrapper.component';

describe('GeneratorWrapperComponent', () => {
  let component: GeneratorWrapperComponent;
  let fixture: ComponentFixture<GeneratorWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratorWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
