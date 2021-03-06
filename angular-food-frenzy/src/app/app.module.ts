import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './pages/Home/home.component';
import { AuthComponent } from './pages/Auth/auth.component';
import { HistoryComponent } from './pages/Home/components/history/history.component';
import { ProfileComponent } from './pages/Home/components/profile/profile.component';
import { FriendsComponent } from './pages/Home/components/friends/friends.component';
import { RequestsComponent } from './pages/Home/components/requests/requests.component';
import { SignInComponent } from './pages/Auth/components/sign-in/sign-in.component';
import { SignUpComponent } from './pages/Auth/components/sign-up/sign-up.component';
import { FriendComponent } from './pages/friend/friend.component';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    HistoryComponent,
    ProfileComponent,
    FriendsComponent,
    RequestsComponent,
    SignInComponent,
    SignUpComponent,
    FriendComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
