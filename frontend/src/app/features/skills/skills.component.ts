import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skillGroups = [
  {
    title: 'Frontend',
    icon: 'fa-solid fa-laptop-code',
    items: ['Angular', 'React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS', 'Responsive UI']
  },
  {
    title: 'Backend',
    icon: 'fa-solid fa-server',
    items: ['Java', 'Spring Boot', 'REST API', 'SQL', 'PHP', 'Laravel', 'Firebase', 'C#']
  },
  {
    title: 'Enterprise & M-Files',
    icon: 'fa-solid fa-building',
    items: ['M-Files VAF', 'Vault Configuration', 'Workflows', 'Document Management', 'Workflow Automation', 'API Integration']
  },
  {
    title: 'Methods & Tools',
    icon: 'fa-solid fa-toolbox',
    items: ['Agile / Scrum', 'Git', 'GitHub', 'VS Code', 'Visual Studio', 'Postman', 'Technical Documentation']
  }
];
}
