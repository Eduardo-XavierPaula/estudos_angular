import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss',
})
export class PipesComponent {
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
