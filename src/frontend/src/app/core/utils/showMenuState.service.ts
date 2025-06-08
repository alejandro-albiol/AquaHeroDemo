import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ShowMenuStateService {
  isOpen = signal<boolean>(false);

  setState() {
    this.isOpen.set(!this.isOpen());
  }

  closeMenu() {
    this.isOpen.set(false);
  }
}
