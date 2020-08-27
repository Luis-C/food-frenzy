import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

export interface Allergy {
  name: string;
  severity: string;
}

const ELEMENT_DATA: Allergy[] = [
  {name: 'Peanuts', severity: 'Deadly'},
  {name: 'Fish', severity: 'Dislike'}
];

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  displayedColumns: string[] = ['name', 'severity', 'delete'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

  onAddRow() 
  {
    console.log('working');
  }

}
