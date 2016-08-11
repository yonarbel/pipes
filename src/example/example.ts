import { Component } from '@angular/core';
import {UriComponentEncodePipe} from '../pipes/uri-component-encode.pipe';


@Component({
  selector: 'examples',
  pipes: [ UriComponentEncodePipe ],
  template:`
   <h1>Pipes Examples</h1>
   ` ,
})

export class Examples {}
