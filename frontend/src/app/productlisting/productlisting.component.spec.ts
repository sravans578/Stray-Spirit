// Developer - Dheeraj Varshney B00808467 dh301823@dal.ca 
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlistingComponent } from './productlisting.component';

describe('PetlistingComponent', () => {
  let component: ProductlistingComponent;
  let fixture: ComponentFixture<ProductlistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductlistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
