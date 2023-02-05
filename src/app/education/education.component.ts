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
      duration: 'July 2018 - May 2022',
      name: 'Dharmsinh Desai University',
      city: 'Nadiad',
      degree: 'Bachelor of Technology in Information Technology ',
      marks: '8.26/10'
    },
    {
      duration: 'March, 2018',
      name: 'Sri Sri Ravishankar Vidya Mandir',
      city: 'Ahmedabad',
      degree: 'Higher Secondary School, Science, CBSE ',
      marks: '89.66% (PCM)'
    },
    {
      duration: 'March, 2016',
      name: 'Sri Sri Ravishankar Vidya Mandir',
      city: 'Ahmedabad',
      degree: 'Secondary School Certificate, CBSE',
      marks: '9.8 CGPA'
    },
  ]

}
