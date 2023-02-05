import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent {

  techDetails = [
    {
      heading:"Core",
      techs:[
        "Software Engineering",
        "Competitive Programming",
        "Data Structure",
        "Database"
      ]
    },
    {
      heading:"Languages",
      techs:[
        "C",
        "C++",
        "Java",
        "Python",
        "C#",
        "HTML",
        "CSS",
        "Javascript",
        "SQL",
        "PL/SQL",
        "Prolog",
        "Assemply Language"
      ]
    },
    {
      heading:"Frameworks and Libraries",
      techs:[
        "React JS",
        "Node JS",
        "Angular",
        "Angular JS",
        "jQuery",
        "Express JS",
        "AJAX",
        "Bootstrap",
        "Spring Boot",
        "Spring MVC",
        "JSP",
        "Servlets",
        ".Net",
        "Hibernate"
      ]
    },
    {
      heading:"Tools",
      techs:[
        "Linux",
        "VS Code",
        "Git",
        "Github",
        "Anaconda",
        "MySQL",
        "MongoDB",
        "Netbeans",
        "Eclipse",
        "Spyder",
        "OracleSQL"
      ]
    },
  ]
}
