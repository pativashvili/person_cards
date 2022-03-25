import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../models/people-model';

@Pipe({
  name: 'nameDisplay',
})
export class NameDisplayPipe implements PipeTransform {
  transform(person: Person): string {
    return `Users: ${person.firstName}`;
  }
}
