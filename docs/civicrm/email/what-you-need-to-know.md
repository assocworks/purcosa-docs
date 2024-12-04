# What You Need To Know

This chapter introduces key concepts and questions to consider when planning the use of CiviCRM's email capabilities. Review this chapter before starting to send emails to contacts. For step-by-step instructions, refer to the **Everyday Tasks** section.

---

## Key Concepts

CiviCRM’s email functionality supports three primary use cases:

- **Individual Emails**: Use the Send Email action for one-on-one or small group emails.
- **Mass Mailings**: Leverage CiviMail for bulk or scheduled emails.
- **Workflow Emails**: Triggered by activities in other components, e.g., event registration confirmations.

**Why Use CiviCRM for Email?**

Emails sent through CiviCRM are recorded as activities in each recipient’s contact history. This allows you to track interactions, such as a donation following a newsletter or a reply to a volunteer request, providing valuable insights.

---

### Send Email vs. CiviMail

CiviCRM offers two distinct email tools:

- **Send Email Action**: Ideal for small groups (fewer than 50 recipients).
- **CiviMail**: Designed for mass mailings with advanced tracking, bounce handling, and subscription management.

**Key Differences:**

- **Send Email**:
  - Limited to 50 recipients.
  - Minimal reporting (activity logs only).
  - Suitable for quick, simple emails.

- **CiviMail**:
  - Required for more than 50 recipients.
  - Tracks bounces, opens, and click-throughs.
  - Includes subscription management and reply tracking.
  - Supports mailing list sign-ups and advanced personalization.

**When to Use Each:**

- **Send Email**: Use for fewer than 50 recipients or when detailed tracking is not required.
- **CiviMail**: Use for mass mailings or when you need detailed tracking and management features.

---

### Choosing Recipients

Both tools allow recipient selection:

- **Send Email**: Select recipients from a contact record or search results.
- **CiviMail**: Select recipients from Groups (Mailing Lists) or search results.

**Unsubscribe Handling for CiviMail:**

CiviMail requires unsubscribe links. Recipients in a Group are unsubscribed from the Group if they opt out. For search results, recipients must be added to a Group to manage unsubscribe requests.

---

### Personalization with Tokens

Tokens allow you to personalize emails with contact-specific information, such as names or event details. While both tools support tokens, CiviMail offers a broader range.

---

### From Email Addresses

Emails can be sent from:

- Your personal email address.
- A general organizational email address.
- Another person's email address (e.g., an assistant sending emails on behalf of a manager).

---

### Headers, Footers, and Templates

- **Headers and Footers**: Customizable for mass mailings via **Administer > CiviMail > Headers, Footers, and Automated Messages**.
- **Templates**: Streamline communication with reusable email templates.

---

### Reporting

CiviMail provides detailed tracking for:

- Email opens.
- Link click-throughs.
- Bounce statistics.

---

### Autofiling External Emails

CiviCRM can record emails sent through your email client by including a special address in the BCC field. This creates an activity in the recipient’s contact record, helping maintain a complete communication history.

---

## Other Considerations

### Key Questions to Guide Planning

- Do you need email templates for repetitive communications?
- Should emails include standard headers or footers?
- Will recipients sign up for your emails online?
- Which emails should be stored in contact records?

### Planning Individual Emails

- How many people are you emailing?
- Do you need tracking for opens and link clicks?
- Have you created a Group or Smart Group for your recipients?
- Should recipients view your email in a browser if needed?
- Who will be listed as the sender?

---

### Interaction with Other Tools

CiviCRM components, such as event registration and contributions, interact with email for confirmations and notifications. These integrations should be customized for consistency with your broader email strategy.

---

### Privacy Considerations

Different jurisdictions have varying laws on email privacy, including requirements for opt-out options. Consider the ethical and legal implications of email tracking, especially for sensitive topics.

---

### Spam and Deliverability

Mass emails risk being flagged as spam, affecting both current and future deliverability. Proper server configuration and adherence to email best practices are essential. Consult experts if needed.

---

### Email Design and Layout

Effective email design ensures your message is accessible and engaging:

- Use simple, clean layouts for consistency and branding.
- Employ responsive design to support various devices.
- Test layouts across email clients for compatibility.
- Use inline CSS for better rendering.
- Balance design and content for maximum impact.

Thoughtful planning of your CiviCRM email strategy will enhance communication efficiency and effectiveness.
