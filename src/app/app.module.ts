import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { DetailformComponent } from './components/detailform/detailform.component';
import { OnboardingModule } from './screens/onboarding/onboarding.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OnboardingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
