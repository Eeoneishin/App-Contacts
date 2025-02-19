import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../data/services/contact.service';
import { Contact } from '../../data/interfaces/contacts.interface';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ContactFormComponent],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  searchQuery: string = '';
  isFormVisible: boolean = false;

  constructor(private contactService: ContactService, private router: Router) {}

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
  }

  searchContacts() {
    this.contacts = this.contactService.getContacts().filter(
      (contact: Contact) =>
        contact.firstName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        contact.lastName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        contact.phone.includes(this.searchQuery)
    );
  }

  deleteContact(id: number) {
    this.contactService.deleteContact(id);
    this.ngOnInit();
  }

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
  }

  onFormCancelled() {
    console.log('Form has been cancelled');
    this.isFormVisible = false;
  }

  onFormSubmitted(contact: Contact) {
    this.contactService.addContact(contact);
    this.isFormVisible = false;
    this.ngOnInit();
  }

  addContact() {
    this.router.navigate(['/add-contact']);
    this.toggleForm();
    this.ngOnInit();
  }

  viewContactDetails(id: number) {
    this.router.navigate(['/contact', id]);  
  }
}
