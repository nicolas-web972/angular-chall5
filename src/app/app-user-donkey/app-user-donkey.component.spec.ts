import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUserDonkeyComponent } from './app-user-donkey.component';

describe('AppUserDonkeyComponent', () => {
  let component: AppUserDonkeyComponent;
  let fixture: ComponentFixture<AppUserDonkeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppUserDonkeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppUserDonkeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
