import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'UsersFilterPipe'
})

export class UsersPipe implements PipeTransform {
    transform(value: any[], filterBy: any): any[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((p: any) => p.fname.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}