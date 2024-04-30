import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-view-children',
  templateUrl: './view-children.component.html',
  styleUrl: './view-children.component.scss',
})
export class ViewChildrenComponent implements AfterViewInit {
  buttonsList = ['Botão 1', 'Botão 2', 'Botão 3'];
  @ViewChildren('meuButton') buttonsEl!: QueryList<
    ElementRef<HTMLButtonElement>
  >;

  ngAfterViewInit(): void {
    console.log(this.buttonsEl);
    const primeiro = this.buttonsEl.toArray()[0];
    primeiro.nativeElement.style.backgroundColor = 'blue';
    primeiro.nativeElement.style.color = 'white';

    this.buttonsEl.changes.subscribe((result) => {
      console.log(result);
    });
  }
  changeColor(event: Event) {
    console.log(event);
    const btnElement = event.target as HTMLButtonElement;
    btnElement.style.backgroundColor = 'orange';
    btnElement.style.color = 'white';
  }
  resetButtons() {
    this.buttonsEl.forEach((btnEl) => {
      btnEl.nativeElement.style.backgroundColor = '';
      btnEl.nativeElement.style.color = 'black';
    });
  }
  first() {
    // const primeiro = this.buttonsEl.get(0);

    // const primeiro = this.buttonsEl.find(
    //   (btnEl) => btnEl.nativeElement.className === 'btn-0'
    // );

    const primeiro = this.buttonsEl.toArray()[0];

    console.log(primeiro);
  }

  remove() {
    this.buttonsList.shift();
  }
}
