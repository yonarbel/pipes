import {PipeTransform, Pipe} from "@angular/core";

@Pipe({

    name : 'numberFormat'

})





export class NumberFormatPipe implements PipeTransform{


    transform(value:string):string {
        return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

}



