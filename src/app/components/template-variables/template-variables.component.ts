import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-template-variables',
  templateUrl: './template-variables.component.html',
  styleUrl: './template-variables.component.scss',
})
export class TemplateVariablesComponent {
  constructor(private _cdRef: ChangeDetectorRef) {}
  changeDetection() {
    this._cdRef.detectChanges();
  }
  clicou(input: HTMLInputElement) {
    console.log(input.value);
    input.value = 'atualizado';
  }
}
