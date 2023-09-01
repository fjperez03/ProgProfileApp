import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { NavComponent } from './nav/nav.component';
import { PolarAreaChartComponent } from './polar-area-chart/polar-area-chart.component';
import { TimelineComponent } from './timeline/timeline.component';
import { CssChartComponent } from './css-chart/css-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    NavComponent,
    PolarAreaChartComponent,
    TimelineComponent,
    CssChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
