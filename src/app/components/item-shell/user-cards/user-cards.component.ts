import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/models/people-model';

@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html',
  styleUrls: ['./user-cards.component.scss'],
})
export class UserCardsComponent implements OnInit {
  @Input() eachPerson!: Person;
  constructor() {}

  ngOnInit(): void {}
  getBackgroundColor(): string | undefined {
    if (this.eachPerson?.status == 'active') {
      return 'green';
    }
    if (this.eachPerson?.status == 'inActive') {
      return 'blue';
    }
    if (this.eachPerson?.status == 'deleted') {
      return 'red';
    }
    return 'transparent';
  }
}
