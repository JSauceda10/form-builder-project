import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent extends FieldType implements OnInit {

  label?: string = "Enter text here";

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
