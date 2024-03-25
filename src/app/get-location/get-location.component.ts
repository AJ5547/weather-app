import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';import {MatListModule} from '@angular/material/list';

import { GetDataService } from '../services/gat-data.service';

@Component({
  selector: 'app-get-location',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule, MatProgressBarModule,MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule,MatListModule],
  templateUrl: './get-location.component.html',
  styleUrl: './get-location.component.css'
})
export class GetLocationComponent {
  constructor( private getDataService: GetDataService){};
  
  isLoading = false;
  location = 'Lehi, UT';
  weatherData: any[] =[];

  getWeather(){
    this.isLoading = true;
    this.getDataService.getWeather(this.location).subscribe((res: any) => {
      this.weatherData = res.weather;
      console.log(res);
      this.isLoading = false;
    });
  }
 
}
