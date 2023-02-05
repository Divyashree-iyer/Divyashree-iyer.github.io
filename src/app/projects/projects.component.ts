import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  ngOnInit() {
    this.displayDetails = this.projectsDetails.slice(0,3)
  }

  showMore(){
    if (this.displayDetails.length < this.projectsDetails.length){
      this.displayDetails = this.projectsDetails;
      this.btnText = 'Show Less'
    }
    else{
      this.btnText = 'Show More';
      this.displayDetails = this.projectsDetails.slice(0,3)

    }
  }

  btnText = 'Show More';
  displayDetails:any;
  projectsDetails = [
    {
      name: "Dynamic Web page Builder",
      description: "Worked in a team of two to develop, test, debug and document a full stack web application ",
      mainTech: [
        "Node.js",
        "Express.js",
        "Angular.js",
        "MongoDB",
        "Mongoose"
      ],
      githubLink:"https://github.com/Divyashree-iyer/SDP_Project"
    },
    {
      name: "ATM DBMS",
      description: "Created a DBMS that handles atm transactions, faults, and exceptional handling. Formulated 50+ complex SQL Queries, Stored procedures, Joints, and Triggers to retrieve data from the relational database. Constructed ER diagram, Schema, and 10+ Data Dictionary tables.",
      mainTech: [
        "PL/SQL", 
        "Oracle SQL"
      ],
      githubLink:""
    },
    {
      name: "User Management using RESTful API",
      description: "Developed a 100% RESTful application to perform get, post, put and delete operations",
      mainTech: [
        "Postman",
        "Java"
      ],
      githubLink:""
    },
    {
      name: "Notes Application using React",
      description: "Developed a 100% RESTful application to perform get, post, put and delete operations",
      mainTech: [
        "React"
      ],
      githubLink:"https://github.com/Divyashree-iyer/React-Start/tree/master/Keeper_app"
    },
    {
      name: "Unit Conversion Compiler",
      description: "Compiles code and performs unit conversions, performs token generation and parsing",
      mainTech: [
        "C",
        "Flex",
        "Yacc"
      ],
      githubLink:""
    },
    {
      name: "Anonymous Tweet Application",
      description: "Using Database Encryption and Salting & Hashing passwords created an application that allows users to tweet anonymously after logging in.",
      mainTech: [
        "Node.js",
        "EJS",
        "Passport.js",
        "OAuth"
      ],
      githubLink:"https://github.com/Divyashree-iyer/Secure-User"
    },
    {
      name: "Static Tinder App for Dogs",
      description: "Static Landing Page for Tindog",
      mainTech: [
        "HTML",
        "CSS",
        "Bootstrap",
        "Javascript"
      ],
      githubLink:"https://github.com/Divyashree-iyer/tindog"
    },
    {
      name: "Employee Application using React",
      description: "React Application to login, search and filter employee list and add new employees",
      mainTech: [
        "React"
      ],
      githubLink:"https://github.com/Divyashree-iyer/Emp_app"
    },
    {
      name: "Cheapest Flight Search",
      description: "Finds cheapest flight from a given location to multiple dif erent locations for the next 6 months",
      mainTech: [
        "Python",
        "Twillo",
        "KIWI",
        "Shetty"
      ],
      githubLink:"https://github.com/Divyashree-iyer/100-days-of-Python/tree/master/flight%20search"
    }
  ]
}
