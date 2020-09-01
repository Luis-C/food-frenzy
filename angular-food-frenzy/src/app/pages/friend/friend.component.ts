import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss'],
})
export class FriendComponent implements OnInit {
  friend: Observable<User>;

  friend_username = 'friend';
  friend_allergies = 'corn, water';
  friend_address = 'street street';
  bump = false;
  buy = false;
  bump_period = 'Week';
  bump_dollars = '$' + 20;
  buy_period = 'Month';
  buy_dollars = '$' + 30;

  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.route.params.subscribe((params) => {
      this.friend = userService.getUser(params.username);
    });
  }

  ngOnInit(): void {}
}
