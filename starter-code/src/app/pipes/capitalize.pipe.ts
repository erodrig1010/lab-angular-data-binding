import { Pipe, PipeTransform } from '@angular/core';
// ^this allows us to use pipes

@Pipe({
    name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  // all pipes need a transform
  // this one capitalizes the first letter of a string
  transform(input: string): any {
      input = input.toLowerCase();
      return input.substring(0, 1).toUpperCase() + input.substring(1);
  }
}