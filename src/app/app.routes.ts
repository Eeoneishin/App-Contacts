import { Routes } from '@angular/router';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactFormComponent } from './contacts/contact-form/contact-form.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component'; //

export const appRoutes: Routes = [
  { path: '', component: ContactListComponent },
  { path: 'contact/:id', component: ContactDetailComponent },
  { path: 'add-contact', component: ContactFormComponent },
];
