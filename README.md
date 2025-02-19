# Contact Management App

This project is a web application for managing contacts. The app allows you to add, edit, view, and delete contacts. Contacts are stored in **Local Storage**.

## Functionality:

- **View Contact List**: You can view a list of all contacts, including their first names, last names, and phone numbers.
- **Add Contacts**: You can add new contacts via a form that allows you to enter the first name, last name, phone number, email, birth date, and address.
- **View Contact Details**: Each contact has an option to view additional information, including email, birth date, and address.
- **Delete Contacts**: You can delete contacts from the list.
- **Form Validation**: When adding a new contact, data validation is performed (first name, last name, phone, and email).

## Tech Stack:

- **Angular** - for frontend development.
- **CSS/SCSS** - for styling components.
- **LocalStorage** - for storing contact data.

## Project Structure:

### Main Components:

1. **ContactListComponent**: Component for displaying the list of all contacts.
2. **ContactFormComponent**: Form for adding/editing contacts.
3. **ContactDetailComponent**: Component for viewing details of a specific contact.
4. **ContactService**: Service for interacting with contacts (retrieving, adding, deleting).

### Routes:

- **/add-contact** - route to the form for adding a new contact.
- **/contact/:id** - route to view the details of a contact by its ID.
- **/** - the homepage displaying the list of contacts.

## How to Run the Project:

### 1. Clone the repository:

```
git clone <your-repository-url>
```

### 2. Install dependencies:

Navigate to the project directory and run:

```
npm install
```

### 3. Run the app:

```
ng serve
```

Open your browser and go to [http://localhost:4200](http://localhost:4200).

## File Descriptions:

- **app.component.ts**: Main component responsible for routing.
- **contact-list.component.ts**: Component for displaying the list of contacts and searching.
- **contact-form.component.ts**: Form component for adding or editing contacts.
- **contact-detail.component.ts**: Component for viewing detailed information about a contact.
- **contact.service.ts**: Service for managing contacts (retrieving, adding, deleting).
- **app.routes.ts**: Routing file for the app.

## Improvements:

- **Contact Editing**: Add functionality to edit existing contacts.
- **Authentication**: Add authentication to access contacts.
- **Filtering and Sorting**: Implement filtering and sorting of contacts by various fields.
