import { Component, input, InputSignal, model, ModelSignal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'mo-switch',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss'
})
export class Switch {
  value: ModelSignal<boolean> = model(false);
  label: InputSignal<string> = input<string>('');

  /**
   * Toggle the switch value
   */
  toggleSwitch(): void {
    this.value.set(!this.value());
  }
}
