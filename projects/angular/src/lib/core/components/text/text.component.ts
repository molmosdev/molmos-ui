import { Component, effect, input, InputSignal, model, ModelSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'mo-text',
  standalone: true,
  imports: [
    FormsModule,
    NgClass
  ],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss'
})
export class Text {
  value: ModelSignal<string | null> = model<string | null>(null);
  label: InputSignal<string | undefined> = input<string | undefined>(undefined);
  inputValue: string = '';

  constructor() {
    effect(() => {
      this.inputValue = this.value() || '';
    });
  }

  /**
   * Get the input trigger state
   *
   * @returns {string} - The input trigger state
   */
  get inputTriggerState(): string {
    return this.label() ? this.value() ? 'hasValue' : 'null' : 'withoutLabel';
  }

  /**
   * Update the value
   *
   * @param {string} newValue
   */
  updateValue(newValue: string): void {
    this.value.set(newValue === '' ? null : newValue);
  }
}
