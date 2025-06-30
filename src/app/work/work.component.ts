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
      name: 'Arizona State University',
      position: 'Teaching Assistant',
      duration: 'August 2023 - May 2025',
      description: [
        "Led lab sessions and guided over 100 students in mastering core programming concepts in C++ and Java.",
        "Built an automated grading tool to evaluate code submissions for correctness and efficiency, significantly reducing grading time and improving feedback consistency.",
        "Designed hands-on assignments, quizzes, and review sessions in collaboration with faculty to deepen student understanding of the subject."
      ],
      certificate:""
    },
    {
      id: '2',
      name: 'Matchbook AI',
      position: 'Software Engineer',
      duration: 'June 2022 - July 2023',
      description: [
        "Responsible for building modular, testable and reusable frontend modules for SPA using Angular 15.",
        "Designing, Implementing, unit testing and using Git Version Control.",
        "Experience with creating custom directives, decorators, and services to interface with SOA services.",
        "Implemented Angular Router to enable navigation from one view to the next as customer performs application tasks."
      ],
      certificate:""
    },
    {
      id: '3',
      name: 'SAC, ISRO',
      position: 'Research and Development Intern',
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
      id: '4',
      name: 'SAC, ISRO',
      position: 'Software Developer Intern',
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
