import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {

    companyDetails = [
    {
      id: '1',
      name: 'Matchbook AI',
      position: 'Angular Developer',
      duration: 'June 2022 - Present',
      description: [
        "Responsible for building modular, testable and reusable frontend modules for SPA using Angular 15.",
        "Designing, Implementing, unit testing and using Git Version Control.",
        "Experience with creating custom directives, decorators, and services to interface with SOA services.",
        "Implemented Angular Router to enable navigation from one view to the next as customer performs application tasks."
      ],
      certificate:""
    },
    {
      id: '2',
      name: 'SAC, ISRO',
      position: 'Research and Development Inter',
      duration: 'December 2021- March 2022',
      description: [
        "Built a Python desktop application for Optimization of the Optimum Interpolation code used for generating merged Sea surface temperature and visualisation of the output.",
        "Using a multiprocessing approach the computational time was reduced from 50 minutes to less than 2 minutes.",
        "Uses Python libraries such as netCDF4, h5py, Basemap, multiprocessing, matplotlib, numpy, scipy among others.",
        "Follows object oriented programming principles."
      ],
      certificate:""
    },
    {
      id: '3',
      name: 'SAC, ISRO',
      position: 'Software Inter',
      duration: 'June 2021- August 2021',
      description: [
        "The Indent and Budget Management System for SAC aims at computerizing the workflow to reduce manual efforts and remote data storage.",
        "Modified a responsive multi user Java web application that uses spring framework, follows MVC pattern is connected to MySQL database uses in house APIs.",
        "Database connectivity was imporoved and new funcitonalities were added."
      ],
      certificate:""
    }
  ]

  selectedCompany = this.companyDetails[0].id;

}
