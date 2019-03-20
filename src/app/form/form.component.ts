import { Component, OnInit } from "@angular/core";
import { NgForm, NgSelectOption } from "@angular/forms";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  constructor() {}
  defaultvalue: string = "";

  SubmitForm(Form: NgForm) {
    console.log("form", Form);
  }
  selectOption(selected) {
    this.defaultvalue = selected;
  }

  ngOnInit() {}
}
