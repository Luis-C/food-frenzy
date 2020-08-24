import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss']
})
export class FriendComponent implements OnInit {

  friend_username = 'friend';
  friend_allergies = 'corn, water';
  friend_address = 'street street';
  bump = false;
  bump_period = 'Week'
  bump_dollars = '$'+20;
  buy_period = 'Month'
  buy_dollars = '$'+30;

  constructor() { }

  ngOnInit(): void {
  }

}
