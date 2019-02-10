// Developer: Aditya Gadhvi (B00809664) (ad742065@dal.ca)

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetProfilePageComponent } from './pet-profile-page.component';

describe('PetProfilePageComponent', () => {
  let component: PetProfilePageComponent;
  let fixture: ComponentFixture<PetProfilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetProfilePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
