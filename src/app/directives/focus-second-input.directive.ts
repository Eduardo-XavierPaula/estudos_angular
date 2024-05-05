import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[appFocusSecondInput]',
})
export class FocusSecondInputDirective implements AfterViewInit {
  // @HostBinding('style.backgroundColor') bgColor = 'blue';
  // @HostBinding('textContent') text = 'Sou uma div por diretiva';

  constructor(private _elRef: ElementRef) {}

  ngAfterViewInit(): void {
    console.log(this._elRef);

    const inputList = this._elRef.nativeElement.querySelectorAll(
      'input'
    ) as HTMLInputElement[];

    if (inputList.length > 1) {
      inputList[1].focus();
    }
  }
}
