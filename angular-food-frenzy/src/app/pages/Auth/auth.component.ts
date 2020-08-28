import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  currentUser: Observable<User>;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.currentUser = this.auth.currentUser;
  }
}
