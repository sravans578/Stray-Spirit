import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetlistingComponent } from './petlisting.component';

describe('PetlistingComponent', () => {
  let component: PetlistingComponent;
  let fixture: ComponentFixture<PetlistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetlistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
