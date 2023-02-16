import { Component, OnInit } from '@angular/core';
import { SurveyForm } from '../survey-form';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {

  model = new SurveyForm();
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: add form here
    this.submitted = true;
  }
}
