import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editor-panel',
  templateUrl: './editor-panel.component.html',
  styleUrls: ['./editor-panel.component.css']
})
export class EditorPanelComponent implements OnInit {

  @Output() valueChange = new EventEmitter();
  @Output() addNewRadioOption = new EventEmitter();

  @Input() componentType!: string;

  newOptionName!: string;
  label!: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {

  }

  changeFn() {
    console.log("The label from editor is: " + this.label);
    this.valueChange.emit(this.label);
    
  }



  addNewRadioButton() {
    console.log(this.newOptionName);
    this.addNewRadioOption.emit(this.newOptionName);
  }

  

}
