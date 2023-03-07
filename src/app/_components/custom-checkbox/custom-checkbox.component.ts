import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-custom-checkbox',
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.css']
})
export class CustomCheckboxComponent extends FieldType implements OnInit {

  label?: string = "Date And Time";

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  updateLabel(abc: string) {
    this.label = abc;
    console.log(abc);
  }

}
