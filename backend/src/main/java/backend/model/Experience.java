package backend.model;

public class Experience {

    private String company;
    private String role;
    private String period;
    private String description;

    public Experience() {
    }

    public Experience(String company, String role, String period, String description) {
        this.company = company;
        this.role = role;
        this.period = period;
        this.description = description;
    }

    public String getCompany() {
        return company;
    }

    public String getRole() {
        return role;
    }

    public String getPeriod() {
        return period;
    }

    public String getDescription() {
        return description;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public void setPeriod(String period) {
        this.period = period;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}