import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { TestService } from '../../services/teste.service';

@Component({
  selector: 'app-element-ref',
  templateUrl: './element-ref.component.html',
  styleUrl: './element-ref.component.scss',
})
export class ElementRefComponent implements OnInit, AfterViewInit {
  @ViewChild('minhaDiv') divEl!: ElementRef<HTMLDivElement>;

  constructor(
    private readonly _elRef: ElementRef,
    private readonly _testeService: TestService
  ) {}

  ngOnInit(): void {
    const divEl = this._elRef.nativeElement.querySelector(
      '#minha-outra-div'
    ) as HTMLDivElement;
    console.log(divEl);
    divEl.textContent = 'Sou a outra div';
    divEl.style.backgroundColor = 'blue';
    divEl.classList.add('minha-classe');
    divEl.addEventListener('click', () => {
      console.log('cliquei na div!');
    });
  }

  ngAfterViewInit(): void {
    this.divEl.nativeElement.style.backgroundColor = 'orange';
    this.divEl.nativeElement.textContent = 'Sou uma div!';
    this.divEl.nativeElement.classList.add('minha-classe');
  }

  createElement() {
    const novaDiv = document.createElement('div');

    novaDiv.textContent = 'Sou a nova div!';
    novaDiv.classList.add('bg-red');
    const container = this._elRef.nativeElement.querySelector(
      '.elementRef'
    ) as HTMLDivElement;
    container.appendChild(novaDiv);
  }

  createElementViaService() {
    this._testeService.create(this._elRef);
  }
}
