import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Contact } from '../interfaces/contacts.interface';

@Injectable({
  providedIn: 'root',
})



export class ContactService {
  private contacts: Contact[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      if (typeof window !== 'undefined' && window.localStorage) {
        this.contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
      }
    }
  }


  getContacts(): Contact[] {
    return this.contacts;
  }

  getContactById(id: number): Contact | undefined {
    return this.contacts.find((contact) => contact.id === id);
  }

  addContact(contact: Contact): void {
    contact.id = Date.now();
    this.contacts.push(contact);
    this.saveContacts();
  }

  updateContact(id: number, updatedContact: Contact): void {
    const index = this.contacts.findIndex((contact) => contact.id === id);
    if (index !== -1) {
      this.contacts[index] = { ...updatedContact, id };
      this.saveContacts();
    }
  }

  deleteContact(id: number) {
    this.contacts = this.contacts.filter((contact) => contact.id !== id);
    this.saveContacts();
  }

  private saveContacts(): void {
    try {
      localStorage.setItem('contacts', JSON.stringify(this.contacts));
    } catch (error) {
      console.error('Error saving contacts to localStorage', error);
    }
  }

}
