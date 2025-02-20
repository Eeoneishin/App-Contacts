import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../../data/services/contact.service';
import { CommonModule } from '@angular/common';
import { Contact } from '../../data/interfaces/contacts.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss'],
})
export class ContactDetailComponent implements OnInit {
  contact: Contact | undefined;
  router: any;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.contact = this.contactService.getContactById(id);
  }

}
