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
import { DiretivaComponent } from './components/diretiva/diretiva.component';
import { HighlightDirective } from './directives/highlight.directive';
import { DisabledDirective } from './directives/disabled.directive';
import { StyleDirective } from './directives/style.directive';
import { ClassDirective } from './directives/class.directive';
import { ListenerDirective } from './directives/listener.directive';
import { InputBackgroundDirective } from './directives/input-background.directive';
import { ElementRefComponent } from './components/element-ref/element-ref.component';
import { FocusSecondInputDirective } from './directives/focus-second-input.directive';
import { XssComponent } from './components/xss/xss.component';
import { CardComponent } from './components/projecao-de-conteudo/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    StatusClassPipe,
    TemplateVariablesComponent,
    PipesComponent,
    NgclassComponent,
    NgstyleComponent,
    NgforComponent,
    NgifComponent,
    TwoWayDataBindingComponent,
    EscopoComponent,
    ViewChildComponent,
    ViewChildFilhoComponent,
    ViewChildrenComponent,
    DiretivaComponent,
    HighlightDirective,
    DisabledDirective,
    StyleDirective,
    ClassDirective,
    ListenerDirective,
    InputBackgroundDirective,
    ElementRefComponent,
    FocusSecondInputDirective,
    XssComponent,
    CardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
