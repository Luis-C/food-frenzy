import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../../../../core/services/notifications.service';

import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  form: FormGroup;

  constructor(
    private notif: NotificationsService,
    private fb: FormBuilder,
    private auth: AuthService
  ) {
    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  async signIn() {
    if (!this.form.valid) return;

    let formData = this.form.value;

    let resp = await this.auth
      .signIn(formData.username, formData.password)
      .toPromise();

    resp ? this.notif.showNotif('Welcome!') : this.notif.showNotif('ERROR');
  }
}
