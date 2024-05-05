import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ViewChildFilhoComponent } from '../view-child-filho/view-child-filho.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.scss',
})
export class ViewChildComponent implements OnInit, AfterViewInit {
  @ViewChild('meuInput') meuInputEl!: ElementRef<HTMLInputElement>;
  @ViewChild('minhaDivEl') minhaDivEl!: ElementRef<HTMLInputElement>;

  @ViewChild('filhoComp') filhoCompRef!: ViewChildFilhoComponent;

  @ViewChild('meuInput2') meuInputEl2!: ElementRef<HTMLInputElement>;

  updateInputText() {
    this.meuInputEl.nativeElement.value = 'Texto atualizado';
  }
  focus() {
    this.meuInputEl.nativeElement.focus();
  }
  updateDivContent() {
    this.minhaDivEl.nativeElement.textContent = 'Conteúdo atualizado';
  }
  hello() {
    this.filhoCompRef.dizerOi();
    this.filhoCompRef.message = 'Eu disse "Oi"!';
  }

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngAfterViewInit(): void {
    // this.meuInputEl2.nativeElement.focus();
  }
}
