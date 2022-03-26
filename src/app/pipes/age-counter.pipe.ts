import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../models/people-model';

@Pipe({
  name: 'ageCounter',
})
export class AgeCounterPipe implements PipeTransform {
  transform(person: Person): Person {
    const today = new Date();
    let age: number;
    let birthday = person.birthDate;
    if (today.getMonth() > birthday.getMonth()) {
      birthday.setFullYear(today.getFullYear() - birthday.getFullYear());
    }
    if (today.getMonth() < birthday.getMonth()) {
      birthday.setFullYear(today.getFullYear() - birthday.getFullYear() + 1);
    }
    if (today.getMonth() == birthday.getMonth()) {
      if (today.getDay() > birthday.getDay()) {
        birthday.setFullYear(today.getFullYear() - birthday.getFullYear());
      }
    }
    if (today.getMonth() == birthday.getMonth()) {
      if (today.getDay() > birthday.getDay()) {
        birthday.setFullYear(today.getFullYear() - birthday.getFullYear() + 1);
      }
    }
    return person;
  }
}
