import { Component, Input, OnInit } from '@angular/core';
import { ITimeline } from './timeline';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent 
implements OnInit{

  @Input() activity:string = "";

  timelines:ITimeline[] = [];
  ngOnInit(): void{
    switch (this.activity) {
      case "work":
        this.timelines=[{
            "from": "2023",
            "to": "Current",
            "title": "ADESS",
            "subtitle": "Systems Development Consultant",
            "description": "As a Systems Developer at Adess, my main responsibility is to lead and oversee all stages of the software development process. This includes managing a development team, planning and designing the system, as well as conducting quality testing and supervising the implementation. Additionally, I take on project management responsibilities and ensure effective communication with stakeholders. My goal is to ensure the successful development and proper functioning of software systems within the organization, delegating the coding and programming tasks to my development team."
          },
          {
            "from": "2013",
            "to": "2023",
            "title": "Seguros Reservas",
            "subtitle": "Senior Programmer",
            "description": "My experience at Seguros Reservas was enriching and filled with exciting challenges. I worked on the development of web services and applications, including creating forms and procedures in databases. Additionally, I had the opportunity to successfully migrate desktop applications to web applications, as well as utilize Crystal Reports for report generation. This experience allowed me to gain valuable skills in web programming, database management, and adaptability to constant changes. I am grateful for the opportunity and look forward to future growth and the exciting challenges that lie ahead. Furthermore, I had the chance to expand my expertise in mobile application development using Xamarin.Forms, enabling me to create innovative and user-friendly solutions across multiple platforms and devices."
          },
          {
            "from": "2008",
            "to": "2013",
            "title": "La Colonial de Seguros",
            "subtitle": "Senior Programmer",
            "description": "During my experience at La Colonial de Seguros, I was involved in various aspects of web development. This included creating, modifying, and implementing web services and web forms. I also had the responsibility of designing database procedures to be utilized by web applications through Ado.net and SQL Server. Additionally, I successfully migrated several desktop applications to web-based platforms, as well as converted VB6 applications to the C# language. I was also involved in report creation using Crystal Reports. Furthermore, I participated in the migration of the Central System from VB6 to C#.NET. These experiences have allowed me to enhance my skills in web development, database management, and application migration."
          },
          {
            "from": "2006",
            "to": "2008",
            "title": "ROS & Asociados",
            "subtitle": "Junior Programmer",
            "description": "During my experience at Ros & Associates, I actively collaborated in the creation, modification, and implementation of web forms. I participated in developing interactive and functional interfaces to enhance the user experience. Additionally, I had the opportunity to work on report creation using Crystal Reports, generating accurate and visually appealing reports to support business decision-making. These experiences allowed me to strengthen my skills in web form development and report generation with Crystal Reports."
          }
        ];
        break;
      case "education":
        this.timelines=[
          {
            "from": "2010",
            "to": "2020",
            "title": "Pontificia Universidad Madre y Maestra (PUCMM)",
            "subtitle": "Univerdad",
            "description": "En esta institucion me desempeñe Bien."
          },
          {
            "from": "2005",
            "to": "2006",
            "title": "ITLA",
            "subtitle": "Programador Java",
            "description": "En esta institucion me desempeñe Bien."
          },


        {
          "from": "2003",
          "to": "1999",
          "title": "Colegio Fernando Arturo de Meriño",
          "subtitle": "Bachillerato.",
          "description": "En esta institucion me desempeñe Bien."
        },
        {
          "from": "1989",
          "to": "1999",
          "title": "Colegio Dominicano de la Salle",
          "subtitle": "Primaria y Secundaria",
          "description": "En esta institucion me desempeñe Bien."
        }
      ];
        break;
    }
  }
}
