package backend.model;

import java.util.List;

public class Portfolio {

    private String fullName;
    private String title;
    private String location;
    private String phone;
    private String email;
    private String linkedin;
    private String profile;
    private List<String> skills;
    private List<Project> projects;
    private List<Experience> experiences;
    private List<Education> education;
    private List<String> certifications;
    private List<String> languages;

    public Portfolio() {
    }

    public Portfolio(
            String fullName,
            String title,
            String location,
            String phone,
            String email,
            String linkedin,
            String profile,
            List<String> skills,
            List<Project> projects,
            List<Experience> experiences,
            List<Education> education,
            List<String> certifications,
            List<String> languages
    ) {
        this.fullName = fullName;
        this.title = title;
        this.location = location;
        this.phone = phone;
        this.email = email;
        this.linkedin = linkedin;
        this.profile = profile;
        this.skills = skills;
        this.projects = projects;
        this.experiences = experiences;
        this.education = education;
        this.certifications = certifications;
        this.languages = languages;
    }

    public String getFullName() {
        return fullName;
    }

    public String getTitle() {
        return title;
    }

    public String getLocation() {
        return location;
    }

    public String getPhone() {
        return phone;
    }

    public String getEmail() {
        return email;
    }

    public String getLinkedin() {
        return linkedin;
    }

    public String getProfile() {
        return profile;
    }

    public List<String> getSkills() {
        return skills;
    }

    public List<Project> getProjects() {
        return projects;
    }

    public List<Experience> getExperiences() {
        return experiences;
    }

    public List<Education> getEducation() {
        return education;
    }

    public List<String> getCertifications() {
        return certifications;
    }

    public List<String> getLanguages() {
        return languages;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setLinkedin(String linkedin) {
        this.linkedin = linkedin;
    }

    public void setProfile(String profile) {
        this.profile = profile;
    }

    public void setSkills(List<String> skills) {
        this.skills = skills;
    }

    public void setProjects(List<Project> projects) {
        this.projects = projects;
    }

    public void setExperiences(List<Experience> experiences) {
        this.experiences = experiences;
    }

    public void setEducation(List<Education> education) {
        this.education = education;
    }

    public void setCertifications(List<String> certifications) {
        this.certifications = certifications;
    }

    public void setLanguages(List<String> languages) {
        this.languages = languages;
    }
}