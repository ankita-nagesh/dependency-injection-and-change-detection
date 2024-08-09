import { ChangeDetectorRef, Component, SkipSelf } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DataService } from '../data.service';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, FormsModule],
  providers: [
    {
      provide: DataService,
      useValue: { message: 'From Parent Compnent' },
    },
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  constructor(
    @SkipSelf() public dataService: DataService,
    public selfDataService: DataService
  ) {}

  updateMessage() {
    this.selfDataService.message = ' From Parent Component Message Updated';
  }
}
