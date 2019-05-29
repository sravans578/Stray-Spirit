import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMarleeComponent } from './login-marlee.component';

describe('LoginMarleeComponent', () => {
  let component: LoginMarleeComponent;
  let fixture: ComponentFixture<LoginMarleeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginMarleeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginMarleeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
