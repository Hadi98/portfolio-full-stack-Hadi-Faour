import { Project } from './project';
import { Experience } from './experience';
import { Education } from './education';

export interface Portfolio {
  fullName: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  profile: string;
  skills: string[];
  projects: Project[];
  experiences: Experience[];
  education: Education[];
  certifications: string[];
  languages: string[];
}
