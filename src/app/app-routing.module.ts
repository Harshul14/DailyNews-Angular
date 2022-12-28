import { BusinessComponent } from './business/business.component';
import { EntertaintmentComponent } from './entertaintment/entertaintment.component';
import { ScienceComponent } from './science/science.component';
import { SportsComponent } from './sports/sports.component';
import { HealthComponent } from './health/health.component';
import { TechComponent } from './tech/tech.component';
import { TopheadlineComponent } from './topheadline/topheadline.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: TopheadlineComponent}, // for top headlines and root
  {path:'home', component: TopheadlineComponent},
  {path:'tech', component: TechComponent},
  {path:'health', component: HealthComponent},
  {path:'sports', component: SportsComponent},
  {path:'science', component: ScienceComponent},
  {path:'entertaintment', component: EntertaintmentComponent},
  {path:'business', component: BusinessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
