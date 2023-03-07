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

  formlyConfig: FormlyFieldConfig[] = [
    {
      key: 'Input',
      type: 'input',
      templateOptions: {
        label: 'Input',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
      },
    },
    {
      key: 'Radio',
      type: 'radio',
      templateOptions: {
        label: 'Radio',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
        options: [
          { value: 1, label: 'Option 1' },
          { value: 2, label: 'Option 2' },
          { value: 3, label: 'Option 3', disabled: true },

        ],
      },
    },
    {
      key: 'Select',
      type: 'select',
      templateOptions: {
        label: 'Select',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
        options: [
          { value: 1, label: 'Option 1' },
          { value: 2, label: 'Option 2' },
          { value: 3, label: 'Option 3' },
          { value: 4, label: 'Option 4', disabled: true },
        ],
      },
    },
    {
      key: 'newInputField',
      type: 'input-field',
      templateOptions: {
        label: 'Select',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
      }
    },
  ]

  formlyConfig1: FormlyFieldConfig[] = [
    {
      key: 'myGroup',
      templateOptions: {
        label: 'A registration form',
        description: 'A simple form example.',
      },
      fieldGroup: [
        {
          type: 'datetime-local',
          templateOptions: {
            type: 'datetime-local',
            label: 'datetime-local',
            required: true,
            name: 'gender',

          },
          key: 'date-local_',
        },
        {
          type: 'custom-radio',
          templateOptions: {
            type: 'datetime-local',
            label: 'datetime-local',
            required: true,
            name: 'radio',

          },
          key: 'radio_',
        },
        
      ],
    },
  ];

  /*readyMadeElements = [
    {
      for: "input",
      type: "input",
      id: "input",
      name: "input",
      placeHolder: "input",
    },
    {
      for: "radio group",
      type: "radio",
      id: "radio",
      name: "radio",
      value: "radio",
      label: "radio",
      howMany: 2,

    },

    {
      for: "checkbox",
      type: "checkbox",
      id: "checkbox",
      name: "checkbox",
      value: "checkbox",
      label: "checkbox",
      howMany: 2,

    },
    {
      for: "date",
      type: "date-field",
      id: "date",
      name: "date",
      value: "date",
      label: "date",


    },
    {
      for: "datetime-local",
      type: "datetime-local",
      id: "datetime-local",
      name: "datetime-local",
      value: "datetime-local",
      label: "datetime-local",
    },
    {
      for: "textarea",
      type: "textarea",
      id: "textarea",
      name: "textarea",
      value: "textarea",
      label: "textarea",


    }

  ];*/

  readyMadeElementsAlternative = [
    { type: "button" },
    { type: "input" },
    { type: "text-area" },
    { type: "drop-down" },
    { type: "radio" },
    { type: "check" },
    { type: "paragraph" },
    { type: "image" },
    { type: "spacer" },
    { type: "divider" },
    { type: "social" },
    { type: "uploader" },
  ];

  

  numSequence(n: number): Array<number> {
    return Array(n);
  }


}
