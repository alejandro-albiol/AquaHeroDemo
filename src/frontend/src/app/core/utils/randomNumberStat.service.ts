import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RandomUserService {
  randomUser = signal<number>(0);

  constructor() {
    this.randomUser.set(Math.floor(Math.random() * 3) + 1);
  }
}
