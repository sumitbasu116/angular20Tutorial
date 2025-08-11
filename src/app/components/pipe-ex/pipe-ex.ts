import { DatePipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-ex',
  imports: [LowerCasePipe,UpperCasePipe,TitleCasePipe,DatePipe,
    SlicePipe
  ],
  templateUrl: './pipe-ex.html',
  styleUrl: './pipe-ex.css'
})
export class PipeEx {
  userName: string = "SUMIT";

  courseName: string = "Angular";

  duration: string = "3 monTH is duRATION";

  currDate: Date = new Date();

  rollNumber: number[] = [11,12,13,14,15,156];
}
