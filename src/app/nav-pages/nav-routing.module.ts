import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { EntertainmentPageComponent } from './entertainment-page/entertainment-page.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { TechPageComponent } from './tech-page/tech-page.component';
import { BusinessPageComponent } from './business-page/business-page.component';
import { LifePageComponent } from './life-page/life-page.component';
import { NewsPageComponent } from './news-page/news-page.component';




const navRoutes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'news', component: NewsPageComponent},
  { path: 'entertainment', component: EntertainmentPageComponent},
  { path: 'food', component: FoodPageComponent},
  { path: 'tech', component: TechPageComponent},
  { path: 'business', component: BusinessPageComponent},
  { path: 'life', component: LifePageComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(navRoutes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class NavRoutingModule { }



