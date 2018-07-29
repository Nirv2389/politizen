import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRepresentativesComponent } from './my-representatives.component';

describe('MyRepresentativesComponent', () => {
  let component: MyRepresentativesComponent;
  let fixture: ComponentFixture<MyRepresentativesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRepresentativesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRepresentativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
