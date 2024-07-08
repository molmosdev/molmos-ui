import { Component, effect, input, InputSignal, model, ModelSignal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'mo-number',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgClass
  ],
  templateUrl: './number.component.html',
  styleUrl: './number.component.scss'
})
export class Number {
  value: ModelSignal<number | null> = model<number | null>(null);
  label: InputSignal<string | undefined> = input<string | undefined>(undefined);
  inputValue: number | null = null;

  constructor() {
    effect(() => {
      this.inputValue = this.value();
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
   * @param {number | null} newValue
   */
  updateValue(newValue: number | null): void {
    this.value.set(newValue);
  }
}
