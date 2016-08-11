import {PipeTransform, Pipe} from "@angular/core";

@Pipe({

    name : 'uriComponentEncode'

})





export class UriComponentEncodePipe implements PipeTransform{


    transform(value:string):string {
        return encodeURIComponent(value);
    }

}



