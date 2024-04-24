import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrl: './two-way-data-binding.component.scss',
})
export class TwoWayDataBindingComponent {
  // two_way_data_binding
  name: string = 'Felipe';

  handleInputChange(event: string) {
    console.log(event);
  }
}
