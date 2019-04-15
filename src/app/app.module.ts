import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { MainComponent } from './main/main.component';
import { SubmitComponent } from './submit/submit.component';
import { RandomResultComponent } from './random-result/random-result.component';
import { LeftResultComponent } from './left-result/left-result.component';
import { RightResultComponent } from './right-result/right-result.component';
import { ShowResultComponent } from './show-result/show-result.component';

@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    MainComponent,
    SubmitComponent,
    RandomResultComponent,
    LeftResultComponent,
    RightResultComponent,
    ShowResultComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
