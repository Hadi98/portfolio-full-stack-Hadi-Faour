import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  highlights = [
    'Full stack development with Java, Angular and REST APIs',
  'Business applications, dashboards and internal tools',
  'Workflow automation, M-Files VAF and API integration',
  'Clean, maintainable and scalable application architecture'
  ];

  values = [
    {
    title: 'Business-Oriented Mindset',
    description: 'I build applications that solve real business needs and provide clear value for users and teams.'
  },
  {
    title: 'Clean Code',
    description: 'I focus on readable code, reusable components, clear structure and proper separation of responsibilities.'
  },
  {
    title: 'Modern Frontend',
    description: 'I create responsive Angular and React interfaces designed for performance, usability and long-term maintenance.'
  },
  {
    title: 'Enterprise Mindset',
    description: 'I am comfortable with workflows, APIs, document management tools and professional enterprise environments.'
  }
  ];
}
