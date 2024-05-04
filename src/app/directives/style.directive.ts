import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective {
  // @HostBinding('attr.style') attrStyle =
  //   'background-color: orange; color: white;';
  // @HostBinding('style') propStyle = 'background-color: green; color: white;';
  @HostBinding('style') propStyleObj = {
    backgroundColor: 'red',
    color: 'white',
  };
}
