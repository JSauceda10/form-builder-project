import { Component, Input, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-custom-radio',
  templateUrl: './custom-radio.component.html',
  styleUrls: ['./custom-radio.component.css']
})
export class CustomRadioComponent extends FieldType implements OnInit {

  label?: string = "Custom Radio";
  newRadioOptionName?: string = "";

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  updateLabel(abc: string) {
    this.label = abc;
  }

  addNewRadioOption(value: string) {
    this.newRadioOptionName = value;
    document.getElementById('radio-group')!.innerHTML += `<div class="form-check">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
      <label class="form-check-label" for="flexRadioDefault2">
        ${this.newRadioOptionName}
      </label>
    </div>`
  }

}
