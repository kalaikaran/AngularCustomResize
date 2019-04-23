import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentSectionComponent } from './document-section/document-section.component';
import { IndividualDocumentComponent } from './individual-document/individual-document.component';
import { SplitPanelComponent } from './split-panel/split-panel.component';

import { AngularSplitModule } from 'angular-split';
import { FinalComponentComponent } from './final-component/final-component.component';
import { PropertyAttributesComponent } from './property-attributes/property-attributes.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentSectionComponent,
    IndividualDocumentComponent,
    SplitPanelComponent,
    FinalComponentComponent,
    PropertyAttributesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularSplitModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
