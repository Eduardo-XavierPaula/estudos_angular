import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  // constructor(private readonly _elRef: ElementRef) {}

  create(elRef: ElementRef) {
    const novaDiv = document.createElement('div');

    novaDiv.textContent = 'Sou a nova div via service!';
    novaDiv.classList.add('bg-blue');
    const container = elRef.nativeElement.querySelector(
      '.elementRef'
    ) as HTMLDivElement;
    container.appendChild(novaDiv);
  }
}
