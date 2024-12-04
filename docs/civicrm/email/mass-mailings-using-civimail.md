# Mass Mailings Using CiviMail

CiviMail provides advanced functionality for sending and managing mass mailings. It allows you to track responses, process bounces, and provide recipients with options to unsubscribe. This chapter covers the steps for creating, sending, and managing mass mailings.

---

## Choosing Recipients: Groups vs. Search Results

You can choose mailing recipients using:

1. **Groups**: Predefined lists of contacts.
2. **Search Results**: A dynamic list based on a search query.

### Key Differences

- **Groups**: Include built-in unsubscribe tracking. Anyone unsubscribed from the group will automatically be excluded from future mailings to that group.
- **Search Results**: Require selecting an **Unsubscription Group** to manage unsubscribe requests, as the list of recipients is not tied to a static group.

### Example
You want to send an announcement to contacts added to your database within the past week:
1. Perform a search for contacts added recently.
2. Set an existing group (e.g., "Event Alerts") as the **Unsubscription Group**.

If you don’t have a relevant group for unsubscribe tracking, create a generic group like "General Mail Unsubscribes" for this purpose.

---

## Setting Recipients: Timing Considerations

- When you **schedule a mailing**, the recipient list is fixed at that moment. 
- Changes to group memberships or search results **after scheduling** won’t affect the recipients.

### Smart Groups

- Smart group criteria are evaluated **at scheduling time**.
- Recipients won’t update dynamically when the email is sent.

### Hidden Smart Groups

If you send a mailing directly from search results using "All NNN records," CiviCRM creates a hidden smart group. To avoid this:
- Select contacts individually from the search results.
- Use "NNN Selected records only" to create a static group.

---

## Mailing Setup Screens

### Step 1: Define Mailing

#### Mailing Tab

- **Mailing Name**: Internal identifier (e.g., "2024-12-04 Newsletter").
- **Campaign**: Optional campaign association.
- **Template**: Use an existing template or create a new one.
- **From**: Select the sender email. Additional addresses can be added in **Administer > CiviMail > From Email Addresses**.
- **Recipients**: 
  - Include and exclude groups or search results.
  - Refine by excluding recipients of past mailings.
  - Use the wrench icon to adjust deduplication or filter by email location type.
- **Unsubscription Group**: Required for search-based mailings.
- **Subject**: The email's subject line. Tokens can be included for personalization.
- **Content**:
  - Compose HTML and/or plain-text versions.
  - Include tokens for personalization.

#### Attachments Tab

Upload files to include with the email.

#### Header and Footer Tab

Customize or replace the default header and footer for this mailing.

#### Publication Tab

- Control visibility:
  - **Public Pages**: Content is viewable by anyone with the appropriate permissions.
  - **User and User Admin Only**: Viewable only by recipients and admins.

#### Responses Tab

- **Track Replies**: Forward replies to the sender or respond with an auto-reply.
- Customize opt-out, resubscribe, and unsubscribe messages.

#### Tracking Tab

- **Track Click-Throughs**: Monitor link clicks.
- **Track Opens**: Record when emails are opened (limited by recipient email client settings).

Click **Next >** to proceed to the Review and Schedule step.

---

### Step 2: Review and Schedule

- **Review**: Summarize recipients, content, and settings. Use clickable links to preview email content and recipient details.
- **Schedule**: Choose to send immediately or at a specified date and time.

Mass mailings are sent in batches to improve deliverability. Delivery timing depends on server configuration and queue processing intervals.

---

## Tracking Sent Mailings

To monitor sent mailings:

1. Go to **Mailings > Scheduled and Sent Mailings**.
2. Click **Report** for a summary of open rates, link clicks, and bounces.
3. Click specific metrics (e.g., "Tracked Opens") for detailed recipient lists.

Use **Advanced Search** to filter results further, e.g., recipients who opened the email and are within a certain age range.

---

## Managing Mailings

Mailings are categorized into three sections:

### Draft and Unscheduled Mailings

- Messages saved or abandoned in the setup process.
- Options: **Continue** editing or **Delete** drafts.

### Scheduled and Sent Mailings

- Scheduled or completed mailings.
- Options:
  - **Report**: View mailing performance.
  - **Copy**: Start a new mailing based on the current one.
  - **Pause**: Temporarily stop sending.
  - **Cancel**: Prevent sending (for scheduled mailings).
  - **Archive** or **Delete**: Manage older mailings.

### Archived Mailings
- Mailings moved from the "Scheduled and Sent" section.
- Archived mailings cannot be included or excluded from future recipient lists.

---

By leveraging CiviMail's advanced features, you can create targeted, trackable, and efficient mass mailings while ensuring compliance with email marketing best practices.
