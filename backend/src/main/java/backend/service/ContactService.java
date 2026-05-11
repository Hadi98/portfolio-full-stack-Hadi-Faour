package backend.service;

import backend.dto.ContactRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class ContactService {

    private final JavaMailSender mailSender;

    @Value("${portfolio.contact.to}")
    private String portfolioEmail;

    @Value("${spring.mail.username}")
    private String fromEmail;

    public ContactService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendContactEmails(ContactRequest request) {
        sendEmailToOwner(request);
        sendConfirmationToSender(request);
    }

    private void sendEmailToOwner(ContactRequest request) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(fromEmail);
        message.setTo(portfolioEmail);
        message.setReplyTo(request.getEmail());
        message.setSubject("New portfolio message : " + request.getSubject());
        message.setText(
                "Name : " + request.getName() + "\n" +
                "Email : " + request.getEmail() + "\n" +
                "Subject : " + request.getSubject() + "\n\n" +
                "Message :\n" + request.getMessage()
        );

        mailSender.send(message);
    }

    private void sendConfirmationToSender(ContactRequest request) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(fromEmail);
        message.setTo(request.getEmail());
        message.setSubject("Message received confirmation");
        message.setText(
                "Hello " + request.getName() + ",\n\n" +
                "Thank you for your message. I have received it and will get back to you as soon as possible.\n\n" +
                "Subject : " + request.getSubject() + "\n" +
                "Message : " + request.getMessage() + "\n\n" +
                "Best regards,\nHadi Faour"
        );

        mailSender.send(message);
    }
}