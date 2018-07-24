import {Component} from '@angular/core';
import {GroupControl} from '../../projects/dynamic-forms/src/lib/controls/group-control';
import {FormGroup} from '@angular/forms';
import {DynamicFormService} from '../../projects/dynamic-forms/src/lib/dynamic-form/dynamic-form.service';
import {TextBoxControl} from '../../projects/dynamic-forms/src/lib/controls/textbox-control';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  parentFormGroup: FormGroup;

  parentGroupControl: GroupControl;
  constructor(private dynamicFormService: DynamicFormService) {


    this.parentGroupControl = new GroupControl({
      key: 'parentForm',
      showErrors: true,
      showNestedFormGroupErrors: true,
      // groupValidators: this.topValidators
      groupControls: [
        new TextBoxControl({
          key: 'test',
          label: 'test'
        })
      ]
    });
    this.parentFormGroup = this.dynamicFormService.toFormGroup(this.parentGroupControl);
  }
}
