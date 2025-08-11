import { DatePipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../../pipes/na-pipe';

@Component({
  selector: 'app-pipe-ex',
  imports: [LowerCasePipe,UpperCasePipe,TitleCasePipe,DatePipe,
    SlicePipe,JsonPipe,NaPipe
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
  studentObj:any = {
    name:'Sumit',
    mobile:'872383278',
    address:{
      city: 'Kolkata',
      state: 'WB'
    }
  }
}
