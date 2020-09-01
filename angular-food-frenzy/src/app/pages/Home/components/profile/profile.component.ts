import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface Allergy {
  name: string;
  severity: string;
}

const ELEMENT_DATA: Allergy[] = [
  { name: 'Peanuts', severity: 'Deadly' },
  { name: 'Fish', severity: 'Dislike' },
];

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  displayedColumns: string[] = ['name', 'severity', 'delete'];
  dataSource = ELEMENT_DATA;

  currentUser: Observable<User>;
  userValue: User;
  form: FormGroup;

  constructor(private auth: AuthService, private fb: FormBuilder) {
    // this.form = fb.group({
    //   username: ['', Validators.required],
    //   password: ['', Validators.required],
    //   passwordVal: ['', Validators.required],
    //   address: ['', Validators.required],
    //   city: ['', Validators.required],
    //   state: ['', Validators.required],
    //   zipcode: ['', Validators.required],
    // });
  }

  ngOnInit(): void {
    this.currentUser = this.auth.currentUser;

    this.currentUser.subscribe((user) => {
      if (user) {
        this.form = this.fb.group({
          address: [user.address, Validators.required],
          city: [user.city, Validators.required],
          state: [user.state, Validators.required],
          zipcode: [user.zipcode, Validators.required],
          bumpable: [user.bumpable],
          buyable: [user.buyable],
          bump: [user.bump_limit],
          buy: [user.buy_limit],
        });
      }
    });
  }

  onAddRow() {
    console.log('working');
  }
}
