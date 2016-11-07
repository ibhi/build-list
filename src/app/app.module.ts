import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { MetricsCardComponent } from './metrics-card/metrics-card.component';
import { BuildCardComponent } from './build-card/build-card.component';
import { UnitTestCardComponent } from './unit-test-card/unit-test-card.component';
import { EpochDatePipe } from './epoch-date//epoch-date.pipe';
import { ResultCardComponent } from './result-card/result-card.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionGroupComponent } from './accordion-group/accordion-group.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    PieChartComponent,
    MetricsCardComponent,
    BuildCardComponent,
    UnitTestCardComponent,
    EpochDatePipe,
    ResultCardComponent,
    AccordionComponent,
    AccordionGroupComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
