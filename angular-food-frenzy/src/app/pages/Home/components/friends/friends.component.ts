import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent implements OnInit {
  currentUser: Observable<User>;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.currentUser = this.auth.currentUser;
  }
}
