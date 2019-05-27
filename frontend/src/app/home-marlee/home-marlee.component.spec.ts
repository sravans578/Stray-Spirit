import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMarleeComponent } from './home-marlee.component';

describe('HomeMarleeComponent', () => {
  let component: HomeMarleeComponent;
  let fixture: ComponentFixture<HomeMarleeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMarleeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMarleeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
