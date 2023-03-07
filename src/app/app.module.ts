import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { FormfoudationComponent } from './formfoudation/formfoudation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { InputFieldComponent } from './_components/input-field/input-field.component';
import { DateFieldComponent } from './_components/date/date-field.component';
import { DateTimeLocalComponent } from './_components/date-time-local/date-time-local.component';
import { FormBuilderService } from './_services/form-builder.service';
import { EditorPanelComponent } from './_components/editor-panel/editor-panel.component';
import { CustomRadioComponent } from './_components/custom-radio/custom-radio.component';
import { CustomInputComponent } from './_components/custom-input/custom-input.component';
import { CustomCheckboxComponent } from './_components/custom-checkbox/custom-checkbox.component';
import { CustomButtonComponent } from './_components/custom-button/custom-button.component';
import { CustomDropdownComponent } from './_components/custom-dropdown/custom-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    FormfoudationComponent,
    InputFieldComponent,
    DateFieldComponent,
    DateTimeLocalComponent,
    EditorPanelComponent,
    CustomRadioComponent,
    CustomInputComponent,
    CustomCheckboxComponent,
    CustomButtonComponent,
    CustomDropdownComponent,
    
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    ReactiveFormsModule,
    FormsModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
      types: [
        { name: 'input-field', component: InputFieldComponent },
        { name: 'date-field', component: DateFieldComponent },
        { name: 'datetime-local', component: DateTimeLocalComponent },
        { name: 'custom-check', component: CustomCheckboxComponent },
        { name: 'custom-radio', component: CustomRadioComponent },
        { name: 'custom-input', component: CustomInputComponent },
        { name: 'custom-button', component: CustomButtonComponent },
        { name: 'custom-dropdown', component: CustomDropdownComponent },
      ],
    }),
    FormlyBootstrapModule,
    
  ],
  providers: [
    FormBuilderService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
