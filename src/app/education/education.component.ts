import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    CommonModule,
    // MaterialModule
  ],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {

  educationDetails = [
    {
      duration: 'August 2023 - May 2025',
      name: 'Arizona State University',
      location: 'AZ, USA',
      degree: 'Master of Computer Science',
      marks: ''
    },
    {
      duration: 'July 2018 - May 2022',
      name: 'Dharmsinh Desai University',
      location: 'India',
      degree: 'Bachelor of Technology in Information Technology',
      marks: ''
    },
    {
      duration: 'March, 2018',
      name: 'Sri Sri Ravishankar Vidya Mandir',
      location: 'India',
      degree: 'Higher Secondary School, Science, CBSE',
      marks: '89.66% (PCM)'
    },
    {
      duration: 'March, 2016',
      name: 'Sri Sri Ravishankar Vidya Mandir',
      location: 'India',
      degree: 'Secondary School Certificate, CBSE',
      marks: '9.8 CGPA'
    },
  ]

}
