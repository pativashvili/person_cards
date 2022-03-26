import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/models/people-model';

enum Status {
  Active = 'active',
  InActive = 'inActive',
  Deleted = 'deleted',
}
enum Colors {
  Green = 'green',
  Red = 'red',
  Blue = 'blue',
}
@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html',
  styleUrls: ['./user-cards.component.scss'],
})
export class UserCardsComponent implements OnInit {
  @Input() eachPerson: Person | undefined;

  constructor() {}

  ngOnInit(): void {}
  status_color(status: string | undefined) {
    if (status == Status.Active) {
      return Colors.Green;
    }
    if (status == Status.InActive) {
      return Colors.Blue;
    }
    return Colors.Red;
  }
}
