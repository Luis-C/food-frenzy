import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './pages/Home/home.component';
import { AuthComponent } from './pages/auth/auth.component';
import { HistoryComponent } from './pages/Home/components/history/history.component';
import { ProfileComponent } from './pages/Home/components/profile/profile.component';
import { FeedComponent } from './pages/Home/components/feed/feed.component';
import { FriendsComponent } from './pages/Home/components/friends/friends.component';
import { RequestsComponent } from './pages/Home/components/requests/requests.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    HistoryComponent,
    ProfileComponent,
    FeedComponent,
    FriendsComponent,
    RequestsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
