import {
  Component,
  Inject,
  SkipSelf,
  Self,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  providers: [
    {
      provide: DataService,
      useValue: { message: 'From  Child Component' },
    },
    {
      provide: 'ROOT_DATA_SERVICE',
      useClass: DataService,
    },
  ],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {
  @Input() parentMessage!: string;
  constructor(
    @Inject('ROOT_DATA_SERVICE') public dataService: DataService,
    @SkipSelf() public parentDataService: DataService,
    @Self() public selfDataService: DataService,
    private cdr: ChangeDetectorRef
  ) {}

  refresh(): void {
    this.cdr.detectChanges();
  }
}
