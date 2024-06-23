import { Component, input } from '@angular/core';

@Component({
  selector: 'mo-dropdown-title',
  standalone: true,
  imports: [],
  templateUrl: './dropdown-title.component.html',
  styleUrl: './dropdown-title.component.scss'
})
export class DropdownTitle {
  /* Signals */
  text = input.required<string>();
}