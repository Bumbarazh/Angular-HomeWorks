import { Pipe, PipeTransform } from '@angular/core';
import {User} from '../models/user';

@Pipe({
  name: 'user'
})
export class UserPipe implements PipeTransform {
  result;
  hOneElem = '<h3>';
  hOneClose = '</h3>';
  pElem = '<p>';
  pClose = '</p>';
  hrElem = '<hr>';

  transform(value: User[], ...args: any): any {
     value.forEach(val => {
       this.result += `
       ${this.hOneElem}${val.id}. ${val.name} ${val.username}${this.hOneClose}
       ${this.pElem}Email: ${val.email} ${this.pClose}
       ${this.pElem}Phone: ${val.phone} ${this.pClose}
       ${this.pElem}Website: ${val.website} ${this.pClose}
       ${this.hrElem}`;
     });
     return this.result;
  }

}
