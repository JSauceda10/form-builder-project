import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-input-field',
  template: `
    <div class="mb-3">
      
      <label for="date">Date:</label>
      <input class="form-control" type="date" id="date" name="date">
    </div>
  `,

})
export class DateFieldComponent extends FieldType {



}
