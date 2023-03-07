import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { concat, fromEvent, Observable } from 'rxjs';
import { AppComponent } from '../app.component';
import { FormBuilderService } from '../_services/form-builder.service';

@Component({
  selector: 'app-formfoudation',
  templateUrl: './formfoudation.component.html',
  styleUrls: ['./formfoudation.component.css']
})
export class FormfoudationComponent implements OnInit {

  private insertedFieldNumber: number = 0;
  
  constructor(private app: AppComponent) {

  }


  ngOnInit(): void {
    this.fields = this.app.formlyConfig1;
    const formlyForm = document.querySelector('#list-two');
    
  }

  @Input() formlyArray!: Array<FormlyFieldConfig>;


  form = new FormGroup({});
  model = {
    id: 123,
    email: 'email@gmail.com',
  };
  options: FormlyFormOptions = {};
  fields!: FormlyFieldConfig[];

  onSubmit() {
    console.log(
      JSON.stringify(this.fields, null, 4)
    );
  }

  drop(event: CdkDragDrop<FormlyFieldConfig[]>) {
    console.log(event);
    //this.insert();
    const itemDataType = event.previousContainer.data[event.previousIndex].type;
    //const itemDataTypeAlt = event.item.element.nativeElement.innerText;
    //const switchCompare = event.container.data[event.previousIndex].type;
    switch (itemDataType) {
      case "button": {
        this.pushNewButtonFieldIntoFormlyForm();
        break;
      }
      case "input": {
        this.pushNewInputFieldIntoFormlyForm();
        break;
      }
      case "text-area": {
        this.pushNewTextAreaIntoFormlyForm();
        break;
      }
      case "drop-down": {

        this.pushNewDropDownIntoFormlyForm();
        break;
      }
      case "radio": {
        
        this.pushNewInputRadioGroupIntoFormlyForm();
        break;
      }
      case "check": {
        
        this.pushNewCheckBoxIntoFormlyForm();
        break;
      }
      case "paragraph": {

        this.pushNewParagraphIntoFormlyForm();
        break;
      }
      case "image": {

        this.pushNewImageIntoFormlyForm();
        break;
      }
      case "spacer": {

        this.pushNewSpacerIntoFormlyForm();
        break;
      }
      case "divider": {

        this.pushNewDividerIntoFormlyForm();
        break;
      }
      case "social": {

        this.pushNewSocialIntoFormlyForm();
        break;
      }
      case "uploader": {

        this.pushNewUploaderIntoFormlyForm();
        break;
      }
      case "date-field": {
        
        this.pushNewDateIntoFormlyForm();
        break;
      }
      case "datetime-local": {
        
        this.pushNewDateTimeLocalIntoFormlyForm();
        break;
      }
      default: {
        console.log("hi");
        break;
      }
    } 
    //console.log(switchCompare);
    console.log(itemDataType);
    //console.log(event.container.data[event.previousIndex]);
    
    //this.app.formlyConfig.push(event.container.data[event.previousIndex]);
  }
  pushNewButtonFieldIntoFormlyForm() {
    let newInputField: FormlyFieldConfig = {
      type: 'custom-button',
      templateOptions: {

        label: 'Button',
        placeholder: 'Button',
        required: true,

      },
      key: 'input_' + this.insertedFieldNumber,

    };
    //console.log(newInputField);
    this.formlyArray[0].fieldGroup!.push(newInputField);
    this.insertedFieldNumber++;
    (this.options as any)._buildForm();
  }

  pushNewInputFieldIntoFormlyForm() {
    //const newLabel = prompt("What label should we put?");
    let newInputField: FormlyFieldConfig = {
      type: 'custom-input',
      templateOptions: {

        label: 'Text Field',
        placeholder: 'Text Field',
        required: true,

      },
      key: 'input_' + this.insertedFieldNumber,

    };
    //console.log(newInputField);
    this.formlyArray[0].fieldGroup!.push(newInputField);
    this.insertedFieldNumber++;
    (this.options as any)._buildForm();

  }

  pushNewTextAreaIntoFormlyForm() {
    //const newLabel = prompt("What label should we put?");
    let newInputField: FormlyFieldConfig = {
      type: 'textarea',
      templateOptions: {
        type: 'textarea',
        label: 'Text Area',
        required: true,
        name: 'gender',

      },
      key: 'text-area_' + this.insertedFieldNumber,
    };
    this.formlyArray[0].fieldGroup!.push(newInputField);
    this.insertedFieldNumber++;
    (this.options as any)._buildForm();
  }

  pushNewDropDownIntoFormlyForm() {
    let newInputField: FormlyFieldConfig = {
      type: 'custom-dropdown',
      templateOptions: {

        label: 'My Drop Down',
        placeholder: 'dropdown',
        required: true,

      },
      key: 'input_' + this.insertedFieldNumber,

    };
    //console.log(newInputField);
    this.formlyArray[0].fieldGroup!.push(newInputField);
    this.insertedFieldNumber++;
    (this.options as any)._buildForm();
  }

  pushNewInputRadioGroupIntoFormlyForm() {
    //const newLabel = prompt("What label should we put?");
    let newInputField: FormlyFieldConfig = {
      type: 'custom-radio',
      className: 'form-check-input',
      templateOptions: {
        type: 'radio',
        label: 'Radio',
        required: true,
        name: 'gender',
        options: [{ value: 'Option 1', key: 'option1' }, { value: 'Option 2', key: 'option1' }]
      },
      key: 'radio_' + this.insertedFieldNumber,
    };
    this.formlyArray[0].fieldGroup!.push(newInputField);
    this.insertedFieldNumber++;
    (this.options as any)._buildForm();
  }

  pushNewCheckBoxIntoFormlyForm() {
    //const newLabel = prompt("What label should we put?");
    let newInputField: FormlyFieldConfig = {
      type: 'custom-check',
      className: 'form-check-input',
      templateOptions: {
        type: 'radio',
        label: 'checkbox',
        required: true,
        name: 'gender',
        options: [{ value: 'Male', key: 'M' }, { value: 'Female', key: 'F' }]
      },
      key: 'checkbox' + this.insertedFieldNumber,
    };
    this.formlyArray[0].fieldGroup!.push(newInputField);
    this.insertedFieldNumber++;
    (this.options as any)._buildForm();
  }

  pushNewParagraphIntoFormlyForm() {
    throw new Error('Method not implemented.');
  }

  pushNewImageIntoFormlyForm() {
    throw new Error('Method not implemented.');
  }

  pushNewSpacerIntoFormlyForm() {
    throw new Error('Method not implemented.');
  }

  pushNewDividerIntoFormlyForm() {
    throw new Error('Method not implemented.');
  }

  pushNewSocialIntoFormlyForm() {
    throw new Error('Method not implemented.');
  }

  pushNewUploaderIntoFormlyForm() {
    throw new Error('Method not implemented.');
  }  
  
  pushNewDateIntoFormlyForm() {
    //const newLabel = prompt("What label should we put?");
    let newInputField: FormlyFieldConfig = {
      type: 'date-field',
      templateOptions: {
        type: 'date-field',
        label: 'date',
        required: true,
        name: 'gender',
        
      },
      key: 'date_' + this.insertedFieldNumber,
    };
    this.formlyArray[0].fieldGroup!.push(newInputField);
    this.insertedFieldNumber++;
    (this.options as any)._buildForm();
  }

  pushNewDateTimeLocalIntoFormlyForm() {
    //const newLabel = prompt("What label should we put?");
    let newInputField: FormlyFieldConfig = {
      type: 'datetime-local',
      templateOptions: {
        type: 'datetime-local',
        label: 'datetime-local',
        required: true,
        name: 'gender',

      },
      key: 'date-local_' + this.insertedFieldNumber,
    };
    this.formlyArray[0].fieldGroup!.push(newInputField);
    this.insertedFieldNumber++;
    (this.options as any)._buildForm();
  }

  insert() {
    let field: FormlyFieldConfig = {
      type: 'input',
      defaultValue: 'This is a dynamically added field',
      templateOptions: {
        label: 'A label',
        placeholder: 'The placeholder',
        description: 'The description',
      },
      key: 'myNewField' + this.insertedFieldNumber,
    };
    this.formlyArray[0].templateOptions!.label += ' (inserted)';
    this.formlyArray[0].fieldGroup!.push(field);
    this.insertedFieldNumber++;
    (this.options as any)._buildForm();
  }

}
