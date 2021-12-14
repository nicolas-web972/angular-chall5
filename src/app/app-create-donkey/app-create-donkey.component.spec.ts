import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCreateDonkeyComponent } from './app-create-donkey.component';

describe('AppCreateDonkeyComponent', () => {
  let component: AppCreateDonkeyComponent;
  let fixture: ComponentFixture<AppCreateDonkeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCreateDonkeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCreateDonkeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
