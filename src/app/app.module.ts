import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PersonComponent } from './person/person.component';
import { StatusClassPipe } from './pipes/status-class.pipe';
import { TemplateVariablesComponent } from './components/template-variables/template-variables.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { NgclassComponent } from './components/ngclass/ngclass.component';
import { NgstyleComponent } from './components/ngstyle/ngstyle.component';
import { NgforComponent } from './components/ngfor/ngfor.component';
import { NgifComponent } from './components/ngif/ngif.component';
import { TwoWayDataBindingComponent } from './components/two-way-data-binding/two-way-data-binding.component';
import { EscopoComponent } from './components/escopo/escopo.component';
import { ViewChildComponent } from './components/view-child/view-child.component';
import { ViewChildFilhoComponent } from './components/view-child-filho/view-child-filho.component';
import { ViewChildrenComponent } from './components/view-children/view-children.component';

@NgModule({
  declarations: [AppComponent, PersonComponent, StatusClassPipe, TemplateVariablesComponent, PipesComponent, NgclassComponent, NgstyleComponent, NgforComponent, NgifComponent, TwoWayDataBindingComponent, EscopoComponent, ViewChildComponent, ViewChildFilhoComponent, ViewChildrenComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
