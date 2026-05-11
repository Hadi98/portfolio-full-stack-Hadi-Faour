import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences = [
  {
    company: 'Partitio',
    role: 'C# / M-Files VAF Developer Intern',
    period: 'Jan 2025 - Aug 2025',
    points: [
      'Developed business automations in C# to optimize internal processes',
      'Analyzed, debugged and resolved application tickets',
      'Wrote technical documentation for support teams and users',
      'Improved existing workflows and contributed to application support'
    ]
  },
  {
    company: 'A.N. Boukhater',
    role: 'Full Stack Java / Angular Developer',
    period: 'Jul 2024 - Aug 2025',
    points: [
      'Maintained and improved websites and internal tools',
      'Analyzed user needs and resolved application incidents',
      'Improved existing interfaces and optimized user journeys',
      'Collaborated with technical teams to ensure quality, reliability and delivery deadlines'
    ]
  },
  {
    company: 'VScenic',
    role: 'Full Stack Java / Angular Developer',
    period: 'May 2023 - Jun 2024',
    points: [
      'Developed dynamic and responsive SPA interfaces',
      'Integrated Firebase authentication and real-time database services',
      'Maintained and improved internal applications',
      'Analyzed technical issues and optimized UI performance'
    ]
  },
  {
    company: 'Multiframe',
    role: 'Full Stack Java / Angular Developer',
    period: 'Jun 2022 - Apr 2023',
    points: [
      'Developed complete web applications from frontend to backend',
      'Designed and integrated secure REST APIs',
      'Handled backend development, business rules and SQL query optimization',
      'Worked in an Agile environment using Gitflow, code reviews and task tracking'
    ]
  }
];
}
