import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KeyComponent } from './components/key/key.component';
import { OperatorComponent } from './components/operator/operator.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyComponent,
    OperatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
