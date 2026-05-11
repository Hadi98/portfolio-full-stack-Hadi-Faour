import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../core/services/contact.service';

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

  constructor(private contactService: ContactService) {}

  onSubmit(): void {
    this.successMessage = '';
    this.errorMessage = '';
    this.loading = true;

    this.contactService.sendMessage(this.form).subscribe({
      next: () => {
        this.successMessage = 'Your message has been sent successfully. You will also receive a confirmation email.';
        this.form = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'An error occurred while sending your message.';
        this.loading = false;
      }
    });
  }
}
