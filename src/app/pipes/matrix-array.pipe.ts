import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../models/people-model';

@Pipe({
  name: 'matrixArray',
})
export class MatrixArrayPipe implements PipeTransform {
  transform(newArray: number[], ...args: any[]): number[] {
    for (let i = 0; i < args[0]; ++i) {
      newArray.push(i);
    }
    return newArray;
  }
}
