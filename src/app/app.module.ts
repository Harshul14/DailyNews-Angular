import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadlineComponent } from './topheadline/topheadline.component';
import { HttpClientModule } from '@angular/common/http';
import { DailynewsapiService } from './service/dailynewsapi.service';
import { TechComponent } from './tech/tech.component';
import { SportsComponent } from './sports/sports.component';
import { HealthComponent } from './health/health.component';
import { ScienceComponent } from './science/science.component';
import { EntertaintmentComponent } from './entertaintment/entertaintment.component';
import { BusinessComponent } from './business/business.component';

@NgModule({
  declarations: [
    AppComponent,
    TopheadlineComponent,
    TechComponent,
    SportsComponent,
    HealthComponent,
    ScienceComponent,
    EntertaintmentComponent,
    BusinessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule
  ],
  providers: [DailynewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
