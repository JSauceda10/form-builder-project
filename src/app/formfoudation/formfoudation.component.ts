import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-formfoudation',
  templateUrl: './formfoudation.component.html',
  styleUrls: ['./formfoudation.component.css']
})
export class FormfoudationComponent implements OnInit {


  constructor(private app: AppComponent) {

  }
  ngOnInit() {
    this.fields = this.formlyArray;
  }

  @Input() formlyArray!: Array<FormlyFieldConfig>;


  form = new FormGroup({});
  model = {
    email: 'email@gmail.com',
  };
  options: FormlyFormOptions = {};
  fields!: FormlyFieldConfig[];

  onSubmit() {
    console.log(
      JSON.stringify(this.fields, null, 4)
    );
  }

  drop(event: CdkDragDrop<any[]>) {
    const itemDataType = event.previousContainer.data[event.previousIndex].type;
    const switchCompare = event.container.data[event.previousIndex].type;
    switch (itemDataType) {
      case "input": {
        console.log("input");
        this.pushNewInputFieldIntoFormlyForm();
        break;
      }
      case "radio": {
        console.log("radio");
        this.pushNewInputRadioGroupIntoFormlyForm();
        break;
      }
      default: {
        console.log("hi");
        break;
      }
    } 
    console.log(switchCompare);
    console.log(itemDataType);
    console.log(event);
    this.app.formlyConfig.push(event.container.data[event.previousIndex]);
  }

  pushNewInputFieldIntoFormlyForm() {
    //const newLabel = prompt("What label should we put?");
    
    this.app.formlyConfig.push({
      
      key: 'email',
      type: 'input',
      templateOptions: {
        type: 'email',
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
        name: undefined,
        options: undefined,
      }
    });
  }

  pushNewInputRadioGroupIntoFormlyForm() {
    //const newLabel = prompt("What label should we put?");
    
    this.app.formlyConfig.push({
      key: 'gender',
      type: 'radio',
      templateOptions: {
        type: 'radio',
        label: 'Gender',
        required: true,
        name: 'gender',
        options: [{ value: 'Male', key: 'M' }, { value: 'Female', key: 'F' }]
      }
    });
  }

}
