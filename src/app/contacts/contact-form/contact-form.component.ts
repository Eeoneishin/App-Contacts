import { Component, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../data/interfaces/contacts.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  contact: Contact = { firstName: '', lastName: '', phone: '', email: '', birthDate: '', address: '', id: 0 };
  @Output() formSubmitted = new EventEmitter<Contact>();
  @Output() formCancelled = new EventEmitter<void>();

  isFormValid(): boolean {
    return this.contact.firstName !== '' &&
           this.contact.lastName !== '' &&
           this.contact.email !== '' &&
           this.isPhoneValid() &&
           this.isEmailValid();
  }

  onSubmit() {
    if (this.isFormValid()) {
      this.formSubmitted.emit(this.contact);
      this.contact = { firstName: '', lastName: '', phone: '', email: '', birthDate: '', address: '', id: 0 }; // Очищуємо форму
    }
  }

  cancel() {
    this.formCancelled.emit();
    this.contact = { firstName: '', lastName: '', phone: '', email: '', birthDate: '', address: '', id: 0 };
    console.log('Canceled')
  }

  isPhoneValid(): boolean {
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(this.contact.phone);
  }

  isEmailValid(): boolean {
    if (!this.contact.email) {
      return false;
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(this.contact.email);
  }
}
