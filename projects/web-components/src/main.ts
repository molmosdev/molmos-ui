import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { Button } from '../../angular/src/lib/core/components/button/button.component';
import { Spinner } from '../../angular/src/lib/core/components/spinner/spinner.component';
import { Dialog } from '../../angular/src/lib/core/components/dialog/dialog.component';
import {
  DialogTitle
} from '../../angular/src/lib/core/components/dialog/components/dialog-title/dialog-title.component';
import { BottomOptions } from '../../angular/src/lib/shared/components/bottom-options/bottom-options.component';
import { Dropdown } from '../../angular/src/lib/core/components/dropdown/dropdown.component';
import {
  DropdownContent
} from '../../angular/src/lib/core/components/dropdown/components/dropdown-content/dropdown-content.component';
import {
  DropdownTitle
} from '../../angular/src/lib/core/components/dropdown/components/dropdown-content/components/dropdown-title/dropdown-title.component';
import {
  DropdownItem
} from '../../angular/src/lib/core/components/dropdown/components/dropdown-content/components/dropdown-item/dropdown-item.component';
import {
  DropdownTrigger
} from '../../angular/src/lib/core/components/dropdown/components/dropdown-trigger/dropdown-trigger.component';
import { Sidebar } from '../../angular/src/lib/core/components/sidebar/sidebar.component';
import {
  SidebarItem
} from '../../angular/src/lib/core/components/sidebar/components/sidebar-item/sidebar-item.component';

const elements = [
  { tag: 'mo-button', component: Button },
  { tag: 'mo-spinner', component: Spinner },
  { tag: 'mo-dialog', component: Dialog },
  { tag: 'mo-dialog', component: DialogTitle },
  { tag: 'mo-bottom-options', component: BottomOptions },
  { tag: 'mo-dropdown', component: Dropdown },
  { tag: 'mo-dropdown-content', component: DropdownContent },
  { tag: 'mo-dropdown-title', component: DropdownTitle },
  { tag: 'mo-dropdown-item', component: DropdownItem },
  { tag: 'mo-dropdown-trigger', component: DropdownTrigger },
  { tag: 'mo-sidebar', component: Sidebar },
  { tag: 'mo-sidebar-item', component: SidebarItem }
];

createApplication().then((appRef) => {
  elements.forEach(({ tag, component }) => {
    const elementCtor = createCustomElement(component, {
      injector: appRef.injector,
    });
    customElements.define(tag, elementCtor);
  });
});
