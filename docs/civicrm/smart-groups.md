# Smart Groups

Smart groups are 'saved searches' that dynamically track groups of records meeting specified criteria, such as "all members in a specific region." Each time you access a smart group, the system runs the search criteria and displays the records that currently match.

Smart groups are powerful tools for managing workflows, segmentation, and automations within the system. It's worth investing time to understand their capabilities and applications.

---

## When Might I Use a Smart Group?

Smart groups are helpful in many scenarios. Below are a couple of examples.

### Smart Groups and Profiles: A Membership Directory

A smart group can be paired with a profile to create a membership directory. For example, create a smart group that includes all current members, and configure a profile to display relevant fields for these members. As individuals join and become members, they are automatically added to the smart group and, consequently, to the directory.

### Smart Groups as Mailing Lists: An Events Newsletter

If you want to send newsletters to individuals who have registered for or attended events, create a smart group based on event participation. Specify this smart group as a mailing list. As individuals register for events, they are automatically added to the group and included in subsequent newsletters. The system respects users' subscription preferences; those who unsubscribe are removed from the group.

---

## Creating Smart Groups

Smart groups can be created from the results of many searches in the system. For example, to create a smart group of donors who have not yet received a thank-you letter:

1. Go to **Search > Find Contacts > Advanced Search**.
2. Open the **Contributions** section.
3. Select **Thank-you date not set** and choose **Donation** from the **Financial Type** dropdown.
4. Click **Search**.
5. Select all records from the search results.
6. From the **Actions** dropdown, select **Group - create smart group**.
7. Provide a name and description for the smart group, optionally designate it as a mailing list, and assign a parent group if needed.
8. Click **Save Smart Group**.

Alternatively, you can create a smart group from Search Kit. From any contact-based search, click **+Add** on the left-hand side and select **Smart Group**.

---

## Changing Criteria for Smart Groups

To refine the criteria for a smart group:

1. Navigate to **Contacts > Manage Groups**.
2. Click **Settings** next to the smart group you wish to update.
3. On the group settings screen, select **Edit Smart Group Criteria**.
4. Modify the criteria in the search interface.
5. Once satisfied, select all records and choose **Update Smart Group** from the **Actions** dropdown.

The smart group will now reflect the updated criteria.

---

## Adding and Removing Smart Group Members Manually

While smart group membership is typically determined by criteria, manual adjustments can override these settings:

- **Adding contacts**: Use the same workflows as adding contacts to standard groups.
- **Removing contacts**: Navigate to **Contacts > Manage Groups**. Select **Contacts** for the desired smart group, check the contact to remove, and use **Group - remove contacts** from the **Actions** dropdown. Confirm the removal.

Once a contact is manually removed, the system will maintain this override even if the contact's attributes match the smart group criteria in the future.

To reverse the override, navigate to the contact's **Groups** tab and delete the smart group record. The contact will then be subject to inclusion based on the group’s criteria.

---

## Smart Group Caching

For performance reasons, smart groups are often cached. This cache stores the current members of the group for a specified period, avoiding the need to re-run the query every time.

Caching benefits:

- Speeds up access to smart groups, especially for complex queries or large datasets.
- Reduces the load on the system.

Drawbacks:

- Changes in the database may take time (e.g., up to 5 minutes) to reflect in smart group membership.

The default cache timeout is 5 minutes, but this can be adjusted via **Administer > Customize Data and Screens > Search Preferences**. Setting the timeout to `0` disables caching altogether.

When a smart group is accessed, the system checks the cache's validity. If the cache has expired, the system rebuilds the group and resets the timeout to the current time plus the cache timeout duration.

---

Smart groups provide dynamic, automated management of records and are a key feature for streamlining workflows and maintaining up-to-date lists.