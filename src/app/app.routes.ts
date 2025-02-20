import { Routes } from '@angular/router';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';

import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';

export const appRoutes: Routes = [
  { path: '', component: ContactListComponent },
  { path: 'contact/:id', component: ContactDetailComponent },
];
