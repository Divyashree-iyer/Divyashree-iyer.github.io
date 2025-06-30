import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  homeIntro = "Hi, my name is";
  homeHeading1 = 'Divyashree Iyer.';
  homeHeading2 = 'I love programming, writing, traveling and binge watching shows.';
  homeContent = "I'm a software engineer specializing in building exceptional digital experiences. Currently, I'm seeking full-time SDE opportunities.";
  
}
