import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  title: string = "Hello FormBuilder service";

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

      ],
    },
  ];

  constructor() { }
}
