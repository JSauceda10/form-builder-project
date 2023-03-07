import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-input-field',
  template: `
    <div class="mb-3">
      
      <label class="form-label">Text Input</label>
      <input type="input" class="form-control">
    </div>
  `,
  
})
export class InputFieldComponent extends FieldType {

  

}
