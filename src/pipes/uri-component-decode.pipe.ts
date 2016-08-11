import {PipeTransform, Pipe} from "@angular/core";

@Pipe({

    name : 'uriComponentDecode'

})





export class UriComponentDecodePipe implements PipeTransform{


    transform(value:string):string {
        return decodeURIComponent(value);
    }

}



