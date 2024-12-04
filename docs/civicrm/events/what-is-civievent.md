# What is CiviEvent?

CiviEvent provides tools for managing events efficiently, making the process easier for both organizers and participants. In this system, CiviEvent is primarily used to manage **information sessions**, which are events for suppliers interested in submitting bids for tenders.

Key features include:

- Self-registration for participants
- Tracking registrations, cancellations, and attendance
- Promoting information sessions on your website
- Streamlining session setup using templates and copy functionality
- On-site check-in of participants using any internet-connected device

---

## Scenario: Supplier Information Session

Imagine a supplier organization running information sessions for suppliers interested in bidding on tenders. These sessions provide crucial details about the tender process and allow suppliers to ask questions.

For such sessions:

- An **event page** is created with an online registration form.
- Using an event template, the setup process is streamlined, automatically filling much of the required information.
- Registrants can complete their registration online, selecting available options, and pay fees if applicable.
- The registration form can collect additional supplier information using a CiviCRM feature called **profiles**.

### Workflow:
1. A targeted list of suppliers is selected, and invitations are sent using CiviMail. The invitations include a direct link to the event registration page.
2. The event is also announced on the organization’s website.
3. A designated staff member monitors registrations, manages waitlists, and answers questions.
4. During the session, participants check in on-site, and the system updates attendance records in real-time.
5. After the session, reports are generated to review attendance and payment details.

---

## Key Concepts

Understanding the following concepts will help you maximize the use of CiviEvent in this system:

### Events, Participants, and Contacts

CiviCRM allows you to create **events** (information sessions) that **contacts** (suppliers) can attend. When a contact attends an event, they become a **participant**.

### Event Types

CiviCRM supports different **event types**. In this system, events are categorized as **Information Sessions**. Event Types allow:

- Segmentation and categorization of events
- Custom fields specific to the type of event
- Easy tracking of participation in specific types of events

### Participant Default Roles

Participants in an event are assigned a default **role**, such as **Attendee**. Roles help organize and segment participants based on their involvement, which can be useful for:

- Sending targeted communications
- Generating role-specific reports

Roles are customizable to fit your system’s needs.

### Participant Statuses

Statuses track participants’ progress through the event process, such as **Registered**, **Attended**, or **Cancelled**. These statuses:

- Are customizable
- Help monitor attendance and no-shows
- Facilitate tailored communications

---
