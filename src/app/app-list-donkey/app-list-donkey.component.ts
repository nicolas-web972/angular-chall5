import { Component, OnInit } from '@angular/core';
import { profile } from '../profile';

@Component({
  selector: 'app-app-list-donkey',
  templateUrl: './app-list-donkey.component.html',
  styleUrls: ['./app-list-donkey.component.scss']
})
export class AppListDonkeyComponent implements OnInit {
  user: profile = {
    name: 'Doe',
    age: 25,
    quote:'two beer or not to beer',
    picture: 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  constructor() { }

  ngOnInit(): void {
  }

  displayingAge : boolean = true;

  hiddingAge() {
    this.displayingAge = !this.displayingAge;
  }
}
