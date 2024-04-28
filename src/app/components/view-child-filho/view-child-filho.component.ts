import { Component } from '@angular/core';

@Component({
  selector: 'app-view-child-filho',
  templateUrl: './view-child-filho.component.html',
  styleUrl: './view-child-filho.component.scss',
})
export class ViewChildFilhoComponent {
  message: string = 'sou o componente filho!';

  dizerOi() {
    alert('oi!!');
  }
}
