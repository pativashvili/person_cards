import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/people-model';
import { PeopleService } from 'src/app/people.service';

@Component({
  selector: 'app-item-shell',
  templateUrl: './item-shell.component.html',
  styleUrls: ['./item-shell.component.scss'],
})
export class ItemShellComponent implements OnInit {
  persons: Person[] | undefined;
  firstArray: any[] = new Array();
  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.peopleService.loadData().then((data) => {
      this.persons = data;
    });
  }
}
