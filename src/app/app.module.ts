import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { MetricsCardComponent } from './metrics-card/metrics-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    PieChartComponent,
    MetricsCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
