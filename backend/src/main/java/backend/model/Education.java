package backend.model;

public class Education {

    private String school;
    private String degree;
    private String period;

    public Education() {
    }

    public Education(String school, String degree, String period) {
        this.school = school;
        this.degree = degree;
        this.period = period;
    }

    public String getSchool() {
        return school;
    }

    public String getDegree() {
        return degree;
    }

    public String getPeriod() {
        return period;
    }

    public void setSchool(String school) {
        this.school = school;
    }

    public void setDegree(String degree) {
        this.degree = degree;
    }

    public void setPeriod(String period) {
        this.period = period;
    }
}