import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format4digits',
  standalone: true
})
export class Format4digitsPipe implements PipeTransform {
  transform(value: number): string {
    const minutes = Math.floor(value / 60);
    const seconds = value % 60;
  
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }
}
