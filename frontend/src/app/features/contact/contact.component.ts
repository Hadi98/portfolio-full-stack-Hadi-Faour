import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  form = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  successMessage = '';
  errorMessage = '';
  loading = false;

  onSubmit(): void {
    this.successMessage = '';
    this.errorMessage = '';
    this.loading = true;

    const templateParams = {
      from_name: this.form.name,
      from_email: this.form.email,
      subject: this.form.subject,
      message: this.form.message
    };

    emailjs
      .send(
        'service_y0xpuma',
        'template_0ifgwnb',
        templateParams,
        'qk82AFUdICTf7VkAb'
      )
      .then(() => {
        this.successMessage = 'Your message has been sent successfully.';
        this.form = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
        this.loading = false;
      })
      .catch((error: unknown) => {
        console.error('EmailJS error:', error);
        this.errorMessage = 'An error occurred while sending your message.';
        this.loading = false;
      });
  }
}
