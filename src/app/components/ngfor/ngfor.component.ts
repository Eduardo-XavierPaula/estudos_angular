import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrl: './ngfor.component.scss',
})
export class NgforComponent {
  // NgFor
  personSelectedIndex: number | undefined;
  listPeople = [
    { name: 'Fulano de Tal', age: 10 },
    { name: 'Fulano de Tal', age: 20 },
    { name: 'Fulano de Tal', age: 30 },
    { name: 'Fulano de Tal', age: 40 },
  ];

  selectPerson(index: number) {
    this.personSelectedIndex = index;
  }
}
