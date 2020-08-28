import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentUser: Observable<User>;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.currentUser = this.auth.currentUser;
  }

  logout() {
    this.auth.logout();
  }
}
