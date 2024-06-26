import { Component, OnInit } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { GetDataService } from '../services/gat-data.service';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-weather',
  standalone: true,
  imports: [CommonModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatProgressBarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatListModule],
  templateUrl: './display-weather.component.html',
  styleUrl: './display-weather.component.css'
})
export class DisplayWeatherComponent implements OnInit {
  constructor(private getDataService: GetDataService,
    private router: Router) { };

  fullApiResponse: any[] = [];


  reformattedDate: Date[] = [];

  ngOnInit() {
    this.fullApiResponse = this.getDataService.getApiResponseCache();
    console.log("This is the service cache response:");
    console.log(this.fullApiResponse);

    // console.log(this.weatherData02);
    if (this.fullApiResponse.length === 0) {
      this.router.navigate(['/location']);
    }
  }

}