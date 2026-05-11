package backend.service;

import backend.model.Education;
import backend.model.Experience;
import backend.model.Portfolio;
import backend.model.Project;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class PortfolioService {

    public Portfolio getPortfolio() {

        List<String> skills = Arrays.asList(
                "Java",
                "Spring Boot",
                "Angular",
                "TypeScript",
                "JavaScript",
                "React",
                "Next.js",
                "HTML",
                "CSS",
                "Tailwind CSS",
                "PHP",
                "Laravel",
                "Firebase",
                "REST API",
                "SQL",
                "C#",
                "M-Files VAF",
                "Git",
                "GitHub",
                "VS Code",
                "Visual Studio",
                "Agile / Scrum"
        );

        List<Project> projects = Arrays.asList(
                new Project(
                        1L,
                        "Full Stack Java / Angular Portfolio",
                        "Professional portfolio designed to present experience, skills and projects clearly, with a backend-connected contact form and scalable REST API architecture.",
                        "Java, Spring Boot, Angular, REST API, SQL",
                        "https://github.com/your-username/full-stack-portfolio"
                ),
                new Project(
                        2L,
                        "Task Management System",
                        "Task management application created to improve follow-up, organization and productivity through authentication, role management and a progress dashboard.",
                        "Angular, Spring Boot, SQL, JWT",
                        "https://github.com/your-username/task-management-system"
                ),
                new Project(
                        3L,
                        "SalonVision AI",
                        "Intelligent web application for hair salons that helps clients visualize different hairstyles before making a decision and digitizes client sessions and image management.",
                        "Angular, Java, REST API, AI Features",
                        "https://github.com/your-username/salonvision-ai"
                )
        );

        List<Experience> experiences = Arrays.asList(
                new Experience(
                        "Partitio",
                        "C# / M-Files VAF Developer Intern",
                        "Jan 2025 - Aug 2025",
                        "Developed C# business automations, improved workflows, resolved application tickets and wrote technical documentation for support teams and users."
                ),
                new Experience(
                        "A.N. Boukhater",
                        "Full Stack Java / Angular Developer",
                        "Jul 2024 - Aug 2025",
                        "Maintained and improved internal tools and websites, analyzed user needs, resolved application incidents and optimized user journeys."
                ),
                new Experience(
                        "VScenic",
                        "Full Stack Java / Angular Developer",
                        "May 2023 - Jun 2024",
                        "Developed dynamic responsive SPA interfaces, integrated Firebase services and improved UI performance for internal applications."
                ),
                new Experience(
                        "Multiframe",
                        "Full Stack Java / Angular Developer",
                        "Jun 2022 - Apr 2023",
                        "Built web applications from frontend to backend, designed secure REST APIs, managed business rules and optimized SQL queries."
                )
        );

        List<Education> education = Arrays.asList(
                new Education(
                        "IAE & MBS Montpellier, France",
                        "Master 2 in Business Engineering in Information Technology (IATI)",
                        "2024 - 2025"
                ),
                new Education(
                        "Antonine University, Beirut, Lebanon",
                        "Engineering degree in Computer and Communication Engineering - Software Engineering and Networks",
                        "2016 - 2023"
                )
        );

        List<String> certifications = Arrays.asList(
                "Professional Scrum Master I - Scrum.org",
                "Cisco Networking (Cisco 1-4)",
                "M-Files User Certification",
                "M-Files Advanced User Certification",
                "M-Files System Administrator Certification",
                "M-Files Vault Application Framework (VAF) Developer Certification"
        );

        List<String> languages = Arrays.asList(
                "French: C1",
                "English: C1",
                "Arabic (Lebanese): Native"
        );

        return new Portfolio(
                "Hadi Faour",
                "Full Stack Java / Angular Developer",
                "Montpellier, France",
                "+33 (0)7 49 00 31 79",
                "faourhadi0@gmail.com",
                "https://www.linkedin.com/in/hadi-faour",
                "Full stack developer with 3 years of experience designing and developing web applications with Java and Angular. Specialized in performant REST APIs and dynamic SPA interfaces, with experience in Agile/Scrum environments, workflow automation and user experience improvement.",
                skills,
                projects,
                experiences,
                education,
                certifications,
                languages
        );
    }
}