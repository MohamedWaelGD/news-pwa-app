import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clipText'
})
export class ClipTextPipe implements PipeTransform {

  transform(value?: string, max: number = 200): string {
    if (!value) return '';

    if (value.length > max) {
      return value.slice(0, max) + '...';
    }

    return value;
  }

}
