import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrl: './ngif.component.scss',
})
export class NgifComponent {
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
}
