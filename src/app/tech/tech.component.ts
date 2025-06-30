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
      heading: "Core",
      techs: [
        "Software Engineering",
        "Competitive Programming",
        "Data Structures & Algorithms",
        "Databases",
        "Operating Systems",
        "Distributed Systems"
      ]
    },
    {
      heading: "Languages",
      techs: [
        "C",
        "C++",
        "Java",
        "Python",
        "C#",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "SQL",
        "PL/SQL",
        "Prolog"
      ]
    },
    {
      heading: "Frameworks & Libraries",
      techs: [
        "React.js",
        "Angular",
        "AngularJS",
        "Node.js",
        "Express.js",
        "jQuery",
        "AJAX",
        "Bootstrap",
        "Spring Boot",
        "Spring MVC",
        "JSP",
        "Servlets",
        ".NET",
        "Hibernate",
        "LangChain",
        "LangGraph",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Gensim",
        "SMOTE"
      ]
    },
    {
      heading: "Databases",
      techs: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Oracle SQL",
        "SQLite",
        "Neo4j"
      ]
    },
    {
      heading: "Cloud & DevOps",
      techs: [
        "AWS EC2",
        "AWS Lambda",
        "AWS S3",
        "AWS IoT Greengrass",
        "AWS SQS",
        "Docker",
        "GitHub Actions"
      ]
    },
    {
      heading: "Tools",
      techs: [
        "Git",
        "GitHub",
        "Postman",
        "Anaconda",
        "VS Code",
        "Eclipse",
        "NetBeans",
        "Linux",
        "Figma",
        "Axure"
      ]
    }
  ];
}
