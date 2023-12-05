import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { Blog01YuyuHakushoComponent } from './blog01-yuyu-hakusho/blog01-yuyu-hakusho.component';
import { Blog02MacysParade2023Component } from './blog02-macys-parade2023/blog02-macys-parade2023.component';
import { Blog03MediaMattersVsElonMuskComponent } from './blog03-media-matters-vs-elon-musk/blog03-media-matters-vs-elon-musk.component';
import { Blog04MissUniverseNicaraguaComponent } from './blog04-miss-universe-nicaragua/blog04-miss-universe-nicaragua.component';
import { Blog05SpacexTestFlightComponent } from './blog05-spacex-test-flight/blog05-spacex-test-flight.component';
import { Blog06TurmoilAtOpenaiComponent } from './blog06-turmoil-at-openai/blog06-turmoil-at-openai.component';
import { Blog07SolarStormComponent } from './blog07-solar-storm/blog07-solar-storm.component';
import { Blog08CzResignsComponent } from './blog08-cz-resigns/blog08-cz-resigns.component';
import { Blog09BinanceCeoPleadsGuiltyComponent } from './blog09-binance-ceo-pleads-guilty/blog09-binance-ceo-pleads-guilty.component';
import { Blog10NasaThanksgiving2023Component } from './blog10-nasa-thanksgiving2023/blog10-nasa-thanksgiving2023.component';
import { Blog11LeoOnNetflixComponent } from './blog11-leo-on-netflix/blog11-leo-on-netflix.component';
import { Blog12BlackpinkReceivesMbeComponent } from './blog12-blackpink-receives-mbe/blog12-blackpink-receives-mbe.component';
import { Blog13PerfectingBulaloComponent } from './blog13-perfecting-bulalo/blog13-perfecting-bulalo.component';
import { Blog14GodzillaMinusOneComponent } from './blog14-godzilla-minus-one/blog14-godzilla-minus-one.component';
import { Blog15GhostbustersFrozenEmpireComponent } from './blog15-ghostbusters-frozen-empire/blog15-ghostbusters-frozen-empire.component';


const blogRoutes: Routes = [
  //Blog paths
  { path: 'yuyu-hakusho', component: Blog01YuyuHakushoComponent},
  { path: 'macys-parade2023', component: Blog02MacysParade2023Component},
  { path: 'matters-vs-elon-musk', component: Blog03MediaMattersVsElonMuskComponent},
  { path: 'miss-universe-2023-nicaragua', component: Blog04MissUniverseNicaraguaComponent},
  { path: 'spacex-test-flight', component: Blog05SpacexTestFlightComponent},
  { path: 'turmoil-at-openai', component: Blog06TurmoilAtOpenaiComponent},
  { path: 'solar-storm', component: Blog07SolarStormComponent},
  { path: 'cz-resigns-binance', component: Blog08CzResignsComponent},
  { path: 'binance-ceo-pleads-guilty', component: Blog09BinanceCeoPleadsGuiltyComponent},
  { path: 'nasa-thanksgiving-2023', component: Blog10NasaThanksgiving2023Component},
  { path: 'leo-on-netflix', component: Blog11LeoOnNetflixComponent},
  { path: 'blackpink-receives-mbe', component: Blog12BlackpinkReceivesMbeComponent},
  { path: 'mastering-bulalo', component: Blog13PerfectingBulaloComponent},
  { path: 'godzilla-minus-one', component: Blog14GodzillaMinusOneComponent},
  { path: 'ghostbusters-frozen-empire', component: Blog15GhostbustersFrozenEmpireComponent},


];


@NgModule({
  imports: [RouterModule.forRoot(blogRoutes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class BlogRoutingModule { }



