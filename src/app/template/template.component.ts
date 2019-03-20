import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

Form:FormGroup

  constructor() { }

  SubmitForm(){
    console.log(this.Form);
  }

  ngOnInit() {
    this.Form = new FormGroup({ email: new FormControl('', [Validators.required,Validators.email]), password: new FormControl('',Validators.required)})
  }

}
