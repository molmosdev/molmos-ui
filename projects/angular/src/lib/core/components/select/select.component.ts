import {
  Component,
  contentChildren,
  effect,
  ElementRef,
  HostListener,
  input,
  InputSignal,
  model,
  ModelSignal,
  output,
  OutputEmitterRef,
  Signal,
  signal,
  viewChild,
  WritableSignal
} from '@angular/core';
import { optionsTrigger } from './animations/animations';
import { SelectOptions } from '../../../shared/components/select-options/select-options.component';
import { OptionsPositioningEnum } from '../../../shared/components/select-options/enums/options-positioning.enum';
import { NgClass } from '@angular/common';
import {
  SelectOption
} from '../../../shared/components/select-options/components/select-option/select-option.component';

@Component({
  selector: 'mo-select',
  standalone: true,
  imports: [
    SelectOptions,
    NgClass,
    SelectOption
  ],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  animations: [
    optionsTrigger
  ]
})
export class Select {
  label: InputSignal<string | undefined> = input<string | undefined>(undefined);
  positioning: ModelSignal<OptionsPositioningEnum> = model<OptionsPositioningEnum>(OptionsPositioningEnum.Down);
  selectedId: ModelSignal<string | null> = model.required<string | null>();
  selectedValue: ModelSignal<string | null> = model<string | null>(null);
  triggerElementRef: Signal<ElementRef | undefined> = viewChild<ElementRef>('trigger');
  showOptions: WritableSignal<boolean> = signal<boolean>(false);
  isFocused: WritableSignal<boolean> = signal(false);
  options: Signal<readonly SelectOption[]> = contentChildren(SelectOption);
  onChangeOption: OutputEmitterRef<void> = output<void>();
  optionsUsingKeyboard: boolean = false;

  constructor() {
    effect(() => {
      this.setSelectedValue();
      this.handleKeyboardUsageState();
    });
  }

  /**
   * Set the selected value
   */
  setSelectedValue(): void {
    if (typeof this.selectedId() !== 'undefined') {
      this.onChangeOption.emit();
    }
  }

  @HostListener('document:keydown.enter', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    if (event.key === 'Enter' && !this.optionsUsingKeyboard) {
      this.isFocused() && this.toggleOptions();
      event.preventDefault();
    }
  }

  /**
   * Toggle the options
   */
  toggleOptions(): void {
    this.showOptions.set(!this.showOptions());
  }

  /**
   * Handle the is using keyboard state
   */
  private handleKeyboardUsageState(): void {
    if (!this.showOptions()) {
      this.optionsUsingKeyboard = false;
    }
  }
}