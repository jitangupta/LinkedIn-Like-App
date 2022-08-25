import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NotFoundComponent } from './shared/components/notfound/notfound.component';
import { HomeComponent } from './pages/home/home.component';
import { BaseComponent } from './base.component';
import { SearchComponent } from './pages/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewPostComponent } from './shared/components/new-post/new-post.component';
import { AuthService } from './core/services/auth.service';
import { PostService } from './core/services/post.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,

    LoginComponent,
    HomeComponent,

    HeaderComponent,
    NotFoundComponent,
    SearchComponent,
    NewPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
  ],
  providers: [AuthService, PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
