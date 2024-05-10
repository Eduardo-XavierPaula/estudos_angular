import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-xss',
  templateUrl: './xss.component.html',
  styleUrl: './xss.component.scss',
})
export class XssComponent {
  exemplo: string = '<img src="teste.jpg" onerror="alert(\'Ataque XSS\')">';
  constructor(
    private readonly _elRef: ElementRef,
    private readonly _renderer2: Renderer2
  ) {}

  createElement(inputText: string) {
    const divEl = document.createElement('div');
    divEl.classList.add('bg-gray');
    divEl.innerHTML = inputText;
    const container = this._elRef.nativeElement.querySelector(
      '.xss'
    ) as HTMLDivElement;

    container.append(divEl);
  }
  createElementCorrect(inputText: string) {
    const divEl = this._renderer2.createElement('div');
    const text = this._renderer2.createText(inputText);
    this._renderer2.appendChild(divEl, text);
    this._renderer2.setStyle(divEl, 'color', 'blue');
    this._renderer2.addClass(divEl, 'bg-gray');
    const container = this._elRef.nativeElement.querySelector(
      '.xss'
    ) as HTMLDivElement;
    this._renderer2.appendChild(container, divEl);
  }
}
