import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPassComponent } from './login-pass.component';

describe('LoginPassComponent', () => {
  let component: LoginPassComponent;
  let fixture: ComponentFixture<LoginPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
