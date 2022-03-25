import { Injectable } from '@angular/core';
import { people } from './data';
import { Person } from './models/people-model';
@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  constructor() {}
  loadData(): Promise<Person[]> {
    return new Promise<Person[]>((resolve) => resolve(people));
  }
}
