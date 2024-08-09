import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  message!: string;

  constructor() {
    this.message = 'From Root';
  }
}
