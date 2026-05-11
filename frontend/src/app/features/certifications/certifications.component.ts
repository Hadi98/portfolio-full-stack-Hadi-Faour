import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Certification {
  title: string;
  issuer: string;
  category: string;
  description: string;
  year: string;
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent {
  certifications: Certification[] = [
    {
  title: 'Professional Scrum Master I (PSM I)',
  issuer: 'Scrum.org',
  category: 'Agile / Scrum',
  description: 'Certification validating knowledge of Scrum principles, agile practices, team collaboration and the Scrum Master role.',
  year: '2026'
},
    {
  title: 'M-Files User Certification',
  issuer: 'M-Files',
  category: 'Document Management',
  description: 'Certification covering the use and main features of the M-Files platform.',
  year: '2025'
},
{
  title: 'M-Files Advanced User Certification',
  issuer: 'M-Files',
  category: 'Advanced Usage',
  description: 'Validation of advanced skills related to using M-Files in a professional environment.',
  year: '2025'
},
{
  title: 'M-Files System Administrator Certification',
  issuer: 'M-Files',
  category: 'Administration',
  description: 'Certification focused on system administration, configuration and management of M-Files environments.',
  year: '2025'
},
{
  title: 'M-Files Vault Application Framework (VAF) Developer Certification',
  issuer: 'M-Files',
  category: 'Development',
  description: 'Certification focused on development with M-Files VAF, business rules and automation.',
  year: '2025'
},
{
  title: 'Cisco Networking Certification',
  issuer: 'Cisco',
  category: 'Networking',
  description: 'Certification related to networking fundamentals, infrastructure and communication between systems.',
  year: '2024'
}
  ];
}
