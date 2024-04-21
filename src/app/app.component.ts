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

  // NgStyle
  fontSize: number = 15;
  textColor: 'green' | 'orange' = 'green';
  buttonText: 'Verde' | 'Laranja' = 'Laranja';
  stylesString: string = 'font-size: 15px; color: green;';
  stylesObj = {
    'font-size': this.fontSize + 'px',
    color: this.textColor,
  };

  increaseFontSize() {
    this.fontSize += 5;
    this.stylesString = `font-size: ${this.fontSize}px; color:${this.textColor};`;
    this.stylesObj = {
      'font-size': this.fontSize + 'px',
      color: this.textColor,
    };
  }

  toggleFontColor() {
    if (this.textColor === 'green') {
      this.textColor = 'orange';
      this.buttonText = 'Verde';
    } else {
      this.textColor = 'green';
      this.buttonText = 'Laranja';
    }

    this.stylesString = `font-size: ${this.fontSize}px; color:${this.textColor};`;
    this.stylesObj = {
      'font-size': this.fontSize + 'px',
      color: this.textColor,
    };
  }

  // NgClass
  isGreen: boolean = true;
  setToGreen() {
    this.isGreen = true;
  }
  setToOrange() {
    this.isGreen = false;
  }
  // Pipes
  text: string = 'Felipe';
  pessoa = {
    name: 'Felipe',
    status: 1,
  };
  pessoa2 = {
    name: 'Matheus',
    status: 2,
  };
  pessoa3 = {
    name: 'Luís',
    status: 3,
  };
}
