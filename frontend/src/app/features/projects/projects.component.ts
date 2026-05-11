import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  category: string;
  stack: string[];
  description: string;
  highlights: string[];
  githubUrl: string;
  demoUrl: string;
  demoImages: string[];
  featured?: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      title: 'Task Management System',
      category: 'Full Stack Application',
      stack: ['Angular', 'Spring Boot', 'MySQL', 'JWT'],
      description:
        'Modern full stack application with authentication, user task management, Kanban/List/Calendar dashboard, advanced filters, and product-oriented architecture.',
      highlights: [
        'Authentification JWT',
        'Dashboard multi-vues',
        'Tâches par utilisateur',
        'CRUD + filtres + recherche'
      ],
      githubUrl: 'https://github.com/your-username/task-management-system',
      demoUrl: '#',
      demoImages: [
        'assets/images/projects/task-management/task-1.png',
        'assets/images/projects/task-management/task-2.png',
        'assets/images/projects/task-management/task-3.png'
      ],
      featured: true
    },
    {
      title: 'SmartDoc AI',
      category: 'Enterprise AI Solution',
      stack: ['Angular', 'Spring Boot', 'Java', 'MySQL', 'OpenAI API', 'PDFBox'],
      description:
        'SmartDoc AI is an intelligent document management solution developed with Angular and Spring Boot. It allows uploading, classifying, analyzing, and searching documents thanks to artificial intelligence.',
      highlights: [
        'AI-powered document analysis',
    'Automatic document classification',
    'Smart metadata extraction',
    'Document summarization',
    'Natural language document search',
    'Chat with document content',
    'Document workflow management'
      ],
      githubUrl: 'https://github.com/your-username/workflow-automation',
      demoUrl: '#',
      demoImages: [
        'assets/images/projects/workflow/workflow-1.png',
        'assets/images/projects/workflow/workflow-2.png',
        'assets/images/projects/workflow/workflow-3.png'
      ]
    },
    {
      title: 'SalonVision AI',
      category: 'AI Web Application',
      stack: ['Angular', 'Spring Boot', 'Java', 'MySQL', 'OpenAI API'],
      description:
        'SalonVision AI is an intelligent hairstyle preview application designed for barbers and hair salons. The platform enables users to upload a client photo, generate haircut recommendations based on face shape analysis, or apply a selected hairstyle reference image to create a realistic AI-generated preview before the haircut.',
      highlights: [
        'AI-based face shape analysis',
    'Personalized haircut recommendation engine',
    'Realistic hairstyle image generation',
    'Support for reference hairstyle images',
    'Client profile and session management',
    'Before/style/result visual comparison',
    'Spring Boot REST API with Angular frontend'
      ],
      githubUrl: 'https://github.com/your-username/business-web-app',
      demoUrl: '#',
      demoImages: [
        'assets/images/projects/workflow/workflow-1.png',
        'assets/images/projects/workflow/workflow-2.png',
        'assets/images/projects/workflow/workflow-3.png'
      ]
    }
  ];

  get featuredProject(): Project | undefined {
    return this.projects.find(project => project.featured);
  }

  get secondaryProjects(): Project[] {
    return this.projects.filter(project => !project.featured);
  }
  selectedProject: any = null;
selectedImageIndex = 0;

openDemo(project: any): void {
  console.log('Project clicked:', project);

  this.selectedProject = project;
  this.selectedImageIndex = 0;
  document.body.style.overflow = 'hidden';
}

closeDemo(): void {
  this.selectedProject = null;
  this.selectedImageIndex = 0;
  document.body.style.overflow = '';
}

nextImage(): void {
  if (!this.selectedProject?.demoImages?.length) return;

  this.selectedImageIndex =
    this.selectedImageIndex === this.selectedProject.demoImages.length - 1
      ? 0
      : this.selectedImageIndex + 1;
}

previousImage(): void {
  if (!this.selectedProject?.demoImages?.length) return;

  this.selectedImageIndex =
    this.selectedImageIndex === 0
      ? this.selectedProject.demoImages.length - 1
      : this.selectedImageIndex - 1;
}

selectImage(index: number): void {
  this.selectedImageIndex = index;
}
}
