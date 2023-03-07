import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent extends FieldType implements OnInit {

  label?: string = "Button Text";

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
