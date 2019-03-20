import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormComponent } from "./form/form.component";
import { TemplateComponent } from "./template/template.component";
import { AppComponent} from "./app.component";

const routes: Routes = [
  { path: "home", component: AppComponent },
  { path: "form", component: FormComponent },
  { path: "template", component: TemplateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
