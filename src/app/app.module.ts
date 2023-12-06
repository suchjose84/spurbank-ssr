import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './templates/header/header.component';
import { NavComponent } from './templates/nav/nav.component';
import { FooterComponent } from './templates/footer/footer.component';
import { LeftSidebarComponent } from './templates/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './templates/right-sidebar/right-sidebar.component';

//blogs
import { Blog01YuyuHakushoComponent } from './blogs/blog01-yuyu-hakusho/blog01-yuyu-hakusho.component';
import { Blog02MacysParade2023Component } from './blogs/blog02-macys-parade2023/blog02-macys-parade2023.component';
import { Blog03MediaMattersVsElonMuskComponent } from './blogs/blog03-media-matters-vs-elon-musk/blog03-media-matters-vs-elon-musk.component';
import { Blog04MissUniverseNicaraguaComponent } from './blogs/blog04-miss-universe-nicaragua/blog04-miss-universe-nicaragua.component';
import { Blog05SpacexTestFlightComponent } from './blogs/blog05-spacex-test-flight/blog05-spacex-test-flight.component';
import { Blog06TurmoilAtOpenaiComponent } from './blogs/blog06-turmoil-at-openai/blog06-turmoil-at-openai.component';
import { Blog07SolarStormComponent } from './blogs/blog07-solar-storm/blog07-solar-storm.component';
import { Blog08CzResignsComponent } from './blogs/blog08-cz-resigns/blog08-cz-resigns.component';
import { Blog09BinanceCeoPleadsGuiltyComponent } from './blogs/blog09-binance-ceo-pleads-guilty/blog09-binance-ceo-pleads-guilty.component';
import { Blog10NasaThanksgiving2023Component } from './blogs/blog10-nasa-thanksgiving2023/blog10-nasa-thanksgiving2023.component';
import { Blog11LeoOnNetflixComponent } from './blogs/blog11-leo-on-netflix/blog11-leo-on-netflix.component';
import { Blog12BlackpinkReceivesMbeComponent } from './blogs/blog12-blackpink-receives-mbe/blog12-blackpink-receives-mbe.component';
import { Blog13PerfectingBulaloComponent } from './blogs/blog13-perfecting-bulalo/blog13-perfecting-bulalo.component';
import { Blog14GodzillaMinusOneComponent } from './blogs/blog14-godzilla-minus-one/blog14-godzilla-minus-one.component';
import { Blog15GhostbustersFrozenEmpireComponent } from './blogs/blog15-ghostbusters-frozen-empire/blog15-ghostbusters-frozen-empire.component';


//Routing Modules
import { BlogRoutingModule } from './blogs/blog-routing.module';
import { NavRoutingModule } from './nav-pages/nav-routing.module';
import { RouterModule } from '@angular/router';

//Nav Pages
import { HomePageComponent } from './nav-pages/home-page/home-page.component';
import { NewsPageComponent } from './nav-pages/news-page/news-page.component';
import { BusinessPageComponent } from './nav-pages/business-page/business-page.component';
import { EntertainmentPageComponent } from './nav-pages/entertainment-page/entertainment-page.component';
import { FoodPageComponent } from './nav-pages/food-page/food-page.component';
import { LifePageComponent } from './nav-pages/life-page/life-page.component';
import { TechPageComponent } from './nav-pages/tech-page/tech-page.component';



@NgModule({
  declarations: [
    AppComponent,

    //Main Components
    HeaderComponent,
    NavComponent,
    FooterComponent,
    LeftSidebarComponent,
    RightSidebarComponent,

    //Blog Pages
    Blog01YuyuHakushoComponent,
    Blog02MacysParade2023Component,
    Blog03MediaMattersVsElonMuskComponent,
    Blog04MissUniverseNicaraguaComponent,
    Blog05SpacexTestFlightComponent,
    Blog06TurmoilAtOpenaiComponent,
    Blog07SolarStormComponent,
    Blog08CzResignsComponent,
    Blog09BinanceCeoPleadsGuiltyComponent,
    Blog10NasaThanksgiving2023Component,
    Blog11LeoOnNetflixComponent,
    Blog12BlackpinkReceivesMbeComponent,
    Blog13PerfectingBulaloComponent,
    Blog14GodzillaMinusOneComponent,
    Blog15GhostbustersFrozenEmpireComponent,

    //Nav Pages
    HomePageComponent,
    NewsPageComponent,
    BusinessPageComponent,
    EntertainmentPageComponent,
    FoodPageComponent,
    LifePageComponent,
    TechPageComponent



  ],

  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    NgbModule,
    BlogRoutingModule,
    NavRoutingModule,
    RouterModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
