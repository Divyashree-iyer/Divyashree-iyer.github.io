import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  aboutContent = [
    "I am passionate Full-stack developer with experience in building responsive websites with a knack for problem solving. I seek challenging work opportunities that allows me to continue learning and developing alongside a team of some of the best professionals in the field.",
    "My main focus these days is building a modular angular product for compliance and data stewardship at Matchbook AI.",
    "Apart from that, I like to spend most of my time with competitive programming and problem-solving. Moreover, I love creating beautiful web interfaces that can interact with the backend and database."
  ]
}
