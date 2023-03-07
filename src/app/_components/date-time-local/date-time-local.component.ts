import { Component, OnInit, Output } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { of } from 'rxjs';


@Component({
  selector: 'datetime-local',
  templateUrl: './date-time-local.component.html',
  styleUrls: ['./date-time-local.component.css']
})
export class DateTimeLocalComponent extends FieldType implements OnInit {

  label?: string = "Date And Time";

  ngOnInit(): void {
    
  }

  updateLabel(abc: string) {
    this.label = abc;
    console.log(abc);
  }

  deleteToggle() {
    
  }

}
