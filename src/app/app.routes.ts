import { Routes } from '@angular/router';
import { AppCreateDonkeyComponent } from './app-create-donkey/app-create-donkey.component';
import { AppListDonkeyComponent } from './app-list-donkey/app-list-donkey.component';
import { AppUserDonkeyComponent } from './app-user-donkey/app-user-donkey.component';

const ROUTES: Routes = [
  { path: 'app-create-donkey', component: AppCreateDonkeyComponent },
  { path: 'app-list-donkey', component: AppListDonkeyComponent },
  { path: 'app-user-donkey', component: AppUserDonkeyComponent },
];

export { ROUTES };
