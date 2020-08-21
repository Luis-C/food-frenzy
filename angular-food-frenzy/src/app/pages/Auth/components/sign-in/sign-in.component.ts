import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../../../../core/services/notifications.service';

import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  form: FormGroup;

  constructor(private notif: NotificationsService, private fb: FormBuilder) {
    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  signIn() {
    console.log(this.form.value); // debug

    console.log('valid:', this.form.valid);

    this.notif.showNotif('Not Implemented');
  }
}
