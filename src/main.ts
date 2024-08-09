import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ParentComponent } from './app/parent/parent.component';
import { DataService } from './app/data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ParentComponent],
  template: `
    <div class="card text-center h-100">
      <div class="card-body">
        <h5 class="card-title">Hello from Root</h5>
        
        <button 
        type="button"  
        class="btn btn-primary" 
        (click)="updateMessage()" 
        title="Update root message"
        >Update </button>
        
        <app-parent></app-parent>
        </div>
    </div>

  `,
})
export class App {
  constructor(private dataService: DataService) {}

  updateMessage() {
    this.dataService.message = ' From Root  Message Updated';
  }
}

bootstrapApplication(App);
