import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardingRoutingModule } from './onboarding-routing.module';
import { DetailFormComponent } from './components/detail-form/detail-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListRestoComponent } from './components/list-resto/list-resto.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    DetailFormComponent,
    ListRestoComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    OnboardingRoutingModule,
    ReactiveFormsModule
  ]
})
export class OnboardingModule { }
