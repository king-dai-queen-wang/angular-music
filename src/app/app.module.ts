import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UiModule} from 'node_modules/dww-angular-component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {registerLocaleData} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    UiModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
