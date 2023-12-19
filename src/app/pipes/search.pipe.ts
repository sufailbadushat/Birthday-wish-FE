import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], nameSearch: string, designationSearch: string, emailSearch: string, dobSearch: string){
    if(!value ){
      return [];
    }

    if (nameSearch) {
      value = value.filter(item => item.name.toLowerCase().includes(nameSearch.toLowerCase()));
    }

    if (designationSearch) {
      value = value.filter(item => item.jobTitle.toLowerCase().includes(designationSearch.toLowerCase()));
    }

    if (emailSearch) {
      value = value.filter(item => item.email.toLowerCase().includes(emailSearch.toLowerCase()));
    }

    if (dobSearch) {
      value = value.filter(item => item.dob.toLowerCase().includes(dobSearch.toLowerCase()));
    }

    return value;

  }

}
