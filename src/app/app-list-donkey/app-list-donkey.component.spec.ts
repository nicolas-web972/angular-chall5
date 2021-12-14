import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppListDonkeyComponent } from './app-list-donkey.component';

describe('AppListDonkeyComponent', () => {
  let component: AppListDonkeyComponent;
  let fixture: ComponentFixture<AppListDonkeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppListDonkeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppListDonkeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
