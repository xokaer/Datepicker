import { Component } from '@angular/core';
import { saveAs } from 'file-saver';
import {SurveyForm} from './survey-form';
import { AppHelper } from './app.helper';

declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showAddNew = true;
  showAddNewForm = false;
  showFormListTable = true;
  showSurveyEditor = false;
  BASE_URL = '';

  currentForm: SurveyForm;
  listOfForms= [
    {
      formID: 1,
      formName: 'Form One',
      descriptionEnglish: 'Description',
      descriptionLocal: 'Description',
      isPublished: true
    }
  ];

  json = {
    title: 'Product Feedback Survey Example',
    showProgressBar: 'top',
    pages: []
  };

  constructor() {
    const rootTag = jQuery('app-root');
    this.BASE_URL = rootTag.attr('BASE_URL');
    AppHelper.BASE_URL = this.BASE_URL;
  }

  // add new form
  onAddNewClick() {
    this.showAddNew = !this.showAddNew;
    this.showFormListTable = false;
    this.showAddNewForm = true;
  }

  // cancel adding new form
  onCancelAddNewClick() {
    this.showAddNew = !this.showAddNew;
    this.showFormListTable = true;
    this.showAddNewForm = false;
  }

  // called when preview button is clicked
  onSurveyPreviewClick(form) {
    this.showSurveyEditor = true;
    this.showAddNew = false;
    this.showFormListTable = false;

    this.currentForm = form;

    this.json.title = form.formName;
  }

  // called when survey preview cancel is clicked
  onSurveyPreviewCancelClick() {
    this.showSurveyEditor = false;
    this.showAddNew = !this.showAddNew;
    this.showFormListTable = true;
    this.showAddNewForm = false;
  }

  // called when saving survey
  // onSurveySaved(survey) {
  //   this.json = survey;
  //   const filename = this.currentForm.formID + '.json';
  //   const blob = new Blob([this.json], { type: 'application/json' });
  //   saveAs(blob, filename);
  // }
}
