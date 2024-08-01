import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailFormComponent } from './screens/onboarding/components/detail-form/detail-form.component';
import { HomeComponent } from './components/home/home.component';
import { ListRestoComponent } from './screens/onboarding/components/list-resto/list-resto.component';

const routes: Routes = [
  {
    path: 'onboarding',
    // loadChildren: () => import('./screens/onboarding/onboarding.module').then(m => m.OnboardingModule)
    component: DetailFormComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'list-resto',
    component: ListRestoComponent
  }
  // {
  //   path: '', redirectTo: '/home', pathMatch: 'full'
  // },
  // {
  //   path: '**', redirectTo: '/home'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
