import { Routes } from '@angular/router';
import { GetLocationComponent } from './get-location/get-location.component';
import { DisplayWeatherComponent } from './display-weather/display-weather.component';
import { DisplayMoonComponent } from './display-moon/display-moon.component';


export const routes: Routes = [
    {path: '', redirectTo:'location', pathMatch:'full'},
    {path:'location', component: GetLocationComponent},
    {path:'weather', component: DisplayWeatherComponent},

];
