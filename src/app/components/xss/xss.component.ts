import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-xss',
  templateUrl: './xss.component.html',
  styleUrl: './xss.component.scss',
})
export class XssComponent {
  exemplo: string =
    '<img src="teste.jpg" onerror="alert(\'imagem não encontrada\')">';
  constructor(private readonly _elRef: ElementRef) {}

  createElement(inputText: string) {
    const divEl = document.createElement('div');
    divEl.innerHTML = inputText;
    const container = this._elRef.nativeElement.querySelector(
      '.xss'
    ) as HTMLDivElement;

    container.append(divEl);
  }
}
