# The LOA Process

When a contract is awarded, the system automatically:

- Creates the LOA document for the Finance Administrators
- Sends an email notification to the Finance Administrator
- Populates a live pages which list contracts for the Tender
- Initiates a tracking process to ensure the contract details are captured on the ERP system

## Downloading the LOA

### Downloading as the Finance Administrator

- The Finance Administrator clicks the link in the email or opens their My LOAs page.

    ![Awarding contracts - email to FinAdmin](https://purcosa.co.za/sites/purcosa.co.za/files/images/guides/Contract%20-%20award%20-%20loa%20email%20to%20finadmin.png)

    ![Finance Admin - Contracts list](https://purcosa.co.za/sites/purcosa.co.za/files/images/guides/Contract%20-%20LOA%20-%20My%20LOA%20menu%20and%20page.png)

- They then click on the link in the **Download LOA** column.

    ![Finance Admin - Contracts list](https://purcosa.co.za/sites/purcosa.co.za/files/images/guides/Contract%20-%20LOA%20-%20My%20LOA%20menu%20and%20page.png)

- The Contract List page encompasses all contract data for the tender, as well as a list of all suppliers who have been awarded a contract.

    ![Finance admin - Contracts and LOAs](https://purcosa.co.za/sites/purcosa.co.za/files/images/guides/Contract%20-%20award%20-%20contracts%20for%20each%20tender%20plus%20loa%20download%20and%20status.png)

### Downloading as Contract Administrator

Contract administrators and other users with the required permissions can download LOAs for contracts through the links provided on the **Tender Dashboard**:

![Tender dashboard - LOA](https://purcosa.co.za/sites/purcosa.co.za/files/images/guides/Contracts%20-%20tender%20dash%20-%20awards%20tab%20-%20LOA.png)

---

## Tracking LOA Download and ERP Capture Status

- Everytime the LOA is downloaded an **activity** is logged. When the Finance Administrator downloads the LOA, the system adds the date and time that the LOA was downloaded in the **LOA Downloaded** column, an additional activity is automatically created for the capture of the contract on the ERP system and set to the **Scheduled** status.

    ![LOA Activity on CiviCRM Supplier](https://purcosa.co.za/sites/purcosa.co.za/files/images/guides/Contract%20-%20award%20-%20loa%20-%20CiviCRM%20activities%20-%20supplier%20record.png)

- Since the source record of this activity is the contract itself, it will be visible in the **Activities Tab** of the supplier owning the contract record. The Finance Administrator will be the contact appearing under **Added By** and will also be listed as an assignee under **Assigned**, along with the Contract Manager and Contract Administrator.
(Note: This activity will also be listed in the **Activities Tab** of each of these contacts.)

    ![Finance Admin - Civi contact page](https://purcosa.co.za/sites/purcosa.co.za/files/images/guides/Contract%20-%20award%20-%20loa%20-%20CiviCRM%20activities%20-%20finadmin%20record.png)

- Two buttons are now available in the **Captured on ERP** column:

    - **Mark as completed**
    - **Report issue / request revision**

    ![Reject LOA Button](https://purcosa.co.za/sites/purcosa.co.za/files/images/guides/Contract%20-%20LOA%20-%20button%20to%20reject%20LOA.png)

---

## Completing the LOA Process After ERP Capture

Once the FinAdmin has captured the contract on the ERP system, they click the **Mark as completed** button on the contract list page.

![Mark as completed](https://purcosa.co.za/sites/purcosa.co.za/files/images/guides/Contract%20-%20LOA%20-%20button%20to%20reject%20LOA.png)

Upon marking the LOA's ERP capture as complete, the system will:

- Remove the **Mark as Completed** button.
- Set the "Capture on ERP" activity status to **Complete**.
- Reflect the date and time of the completion in the **Captured on ERP** column.

---

## Checking the Status of Contracts and LOAs:

Any user with a Contract Admin or Finance role can check the status of contracts and LOAs by visiting the **LOA Captured Report** page.

![LOA Captured Report](https://purcosa.co.za/sites/purcosa.co.za/files/images/guides/Contract%20-%20LOA%20-%20LOA%20captured%20report.png)

![LOA Captured Report Page](https://purcosa.co.za/sites/purcosa.co.za/files/images/guides/Contract%20-%20LOA%20captured%20report%20page.png)

---

## The LOA Rejection Process

This is the process Finance Administrators will use to reject an LOA and **report an issue** to the tender author.

1. FinAdmin can reject an LOA by clicking the button **Report Issue / Request Revision**.

   ![Reject LOA](https://purcosa.co.za/sites/purcosa.co.za/files/images/guides/Contract%20-%20LOA%20-%20button%20to%20reject%20LOA.png)

2. When clicked, the system opens a form to specify the required changes.

   ![Specify Issue](https://purcosa.co.za/sites/purcosa.co.za/files/images/guides/Contract%20-%20LOA%20-%20popup%20to%20specify%20issue.png)

3. Submitting the request updates the table, reflecting that ERP Capture is delayed pending the revision.

   ![Awaiting Revision](https://purcosa.co.za/sites/purcosa.co.za/files/images/guides/awaitingrevision.png)

4. Submitting the revision request triggers an email to the **Contract Administrator** and **Manager** with the rejection details.

   ![LOA Rejection Email](https://purcosa.co.za/sites/purcosa.co.za/files/images/guides/Contract%20-%20LOA%20rejection%20-%20activity%20details.jpeg)

5. The LOA rejection adds a scheduled "Document Revision" **activity**, which can be seen in the **Activities Tab** of all involved contacts - the supplier organisation, the Finance Administrator, Contract Administrator, and Contract Manager.

   ![CiviCRM Activity](https://purcosa.co.za/sites/purcosa.co.za/files/images/guides/Contract%20-%20LOA%20-%20activity%20in%20CiviCRM.png)

6. The "Captured on ERP" column now has a **Delayed** status. Contracts like these can be filtered in the **LOA Captured Report**.

   ![ERP Capture Status](https://purcosa.co.za/sites/purcosa.co.za/files/images/guides/Screenshot%202025-03-17%20at%2013.37.42.png)

---

## Responding to a Revision Request

1. On receipt of the **Change Requested** email, the tender author should review and correct the issue.
2. Once resolved, they should:
   - Find the relevant "Document Revision" activity (which appears in the **Activities Tab** of their own contact summary as well as the supplier's contact summary)
   - Click the **Edit** link for the activity.
   - Set the status of the activity as **Complete**.

3. Marking the activity as **Completed** triggers an email notification to the FinAdmin.

    ![Email to FinAdmin](https://purcosa.co.za/sites/purcosa.co.za/files/images/guides/Contract%20-%20rejection%20-%20email%20to%20finadamin%20when%20issue%20fixed%20.jpeg)

    The **Captured on ERP** column in the Contract list now reflects as "Delayed (revision ready)". The **LOA Downloaded** column reflects that the revision has not yet been downloaded:

    ![Screenshot](https://purcosa.co.za/sites/purcosa.co.za/files/images/guides/Contract%20-%20LOA%20-%20list%20with%20status%20revision%20completed.png)

4. After the FinAdmin has download the updated LOA, the **LOA Downloaded** column reflects the date and time of the download of the revision, and the "Mark as completed" and "Report issue" actions are available again.

   ![Revised LOA Downloaded](https://purcosa.co.za/sites/purcosa.co.za/files/images/guides/reviseddownloaded.png)

---
