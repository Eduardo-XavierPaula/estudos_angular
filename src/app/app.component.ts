import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // two_way_data_binding
  name: string = 'Felipe';

  handleInputChange(event: string) {
    console.log(event);
  }

  // NgIf
  minhaProp = true;
  toggleProp() {
    this.minhaProp = !this.minhaProp;
  }

  isTruthy() {
    return {};
    //   return [];
    //   return true;
    //   return 1;
    //   return "teste";
    //   return "0";
    //   return "false";
  }
  isFalsy() {
    return false;
    return 0;
    return '';
    return null;
    return undefined;
    return -0;
    return NaN;
  }

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
