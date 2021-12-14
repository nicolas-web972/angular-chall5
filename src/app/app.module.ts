import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCreateDonkeyComponent } from './app-create-donkey/app-create-donkey.component';
import { AppListDonkeyComponent } from './app-list-donkey/app-list-donkey.component';
import { AppUserDonkeyComponent } from './app-user-donkey/app-user-donkey.component';

@NgModule({
  declarations: [
    AppComponent,
    AppCreateDonkeyComponent,
    AppListDonkeyComponent,
    AppUserDonkeyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
