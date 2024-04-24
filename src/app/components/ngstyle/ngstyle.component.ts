import { Component } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrl: './ngstyle.component.scss',
})
export class NgstyleComponent {
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
}
