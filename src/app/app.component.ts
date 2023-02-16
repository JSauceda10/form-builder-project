import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    
  }

  title = 'form-builder-project';

  formlyConfig = [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        type: 'email',
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      }
    },
    {
      key: 'gender',
      type: 'radio',
      templateOptions: {
        type: 'radio',
        label: 'Gender',
        required: true,
        name: 'gender',
        options: [{ value: 'Male', key: 'M' }, { value: 'Female', key: 'F' }]
      }
    },
  ]

  readyMadeElements = [
    {
      for: "name",
      type: "input",
      id: "name",
      name: "name",
      placeHolder: "name",
    },
    {
      for: "radio group",
      type: "radio",
      id: "radio",
      name: "radio",
      value: "radio",
      label: "radio",
      howMany: 2,

    }
    
  ]

  

  numSequence(n: number): Array<number> {
    return Array(n);
  }


}
