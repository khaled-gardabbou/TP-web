import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { CheesecakesComponent } from './cheesecakes/cheesecakes.component';
import { PiesComponent } from './pies/pies.component';
import { TousdetailsComponent } from './tousdetails/tousdetails.component';
import { AppRoutingModule } from './app-routing.module';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CheesecakesComponent,
    PiesComponent,
    TousdetailsComponent,
    LeftMenuComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
