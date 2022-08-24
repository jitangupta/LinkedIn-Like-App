import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NotFoundComponent } from './shared/components/notfound/notfound.component';
import { HomeComponent } from './pages/home/home.component';
import { BaseComponent } from './base.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,

    LoginComponent,
    HomeComponent,

    HeaderComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
