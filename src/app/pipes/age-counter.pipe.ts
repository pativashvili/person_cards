import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../models/people-model';

@Pipe({
  name: 'ageCounter',
})
export class AgeCounterPipe implements PipeTransform {
  transform(person: Person): Person {
    const today = new Date();
    person.birthDate = new Date(
      today.getFullYear() - person.birthDate.getFullYear(),
      today.getDay() - person.birthDate.getDay(),
      today.getMonth() - person.birthDate.getMonth()
    );
    return person;
  }
}
