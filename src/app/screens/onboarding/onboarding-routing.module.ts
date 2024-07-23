import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailFormComponent } from './components/detail-form/detail-form.component';

const routes: Routes = [
  { path: '', component: DetailFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingRoutingModule { }
