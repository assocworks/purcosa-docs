# Assessing Bids

## Accessing the Bid Assessment page

The **Bid Assessment** page can be accessed in various ways:

### Via the Tender Dashboard

1. Navigate to the Tender Dashboard for the relevant tender (see [Accessing a Tender's Dashboard](../tenders/tender-dashboard.md/#accessing-a-tenders-dashboard)).

2. In the Tenderbox Dashboard, select the TenderBox tab.

    ![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-10-15/93cf89f8-36c9-497c-b188-aff686501798/ascreenshot.jpeg?tl_px=1672,339&br_px=3392,1300&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=1&wat_gravity=northwest&wat_url=https://colony-recorder.s3.amazonaws.com/images/watermarks/ee0000_standard.png&wat_pad=524,277)


3. Click "Assess bids"

    ![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-10-15/2f178b73-df1c-480b-a552-83fd3c7a63a7/ascreenshot.jpeg?tl_px=1768,929&br_px=3488,1890&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=1&wat_gravity=northwest&wat_url=https://colony-recorder.s3.amazonaws.com/images/watermarks/ee0000_standard.png&wat_pad=523,276)


### Via the BidSubmissions list

1. In the **ADMIN** menu, select **BidSubmissions - view & assess** in the **TenderBoxes** sub-menu.

    ![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-10-15/b9718a5e-65ea-44ad-967e-481a78c3e574/ascreenshot.jpeg?tl_px=1866,289&br_px=3586,1250&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=1&wat_gravity=northwest&wat_url=https://colony-recorder.s3.amazonaws.com/images/watermarks/ee0000_standard.png&wat_pad=523,277)


2. To easily find a specific TenderBox, type all or part of the tender number or name in the **Tender Name/Number** input box.

    ![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-10-15/ef27debc-a6b9-4f87-b3a9-1c50cc737c88/ascreenshot.jpeg?tl_px=432,253&br_px=2152,1214&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=1&wat_gravity=northwest&wat_url=https://colony-recorder.s3.amazonaws.com/images/watermarks/ee0000_standard.png&wat_pad=524,277)


3. Click the "View & assess bids" link for the desired tender in the column on the right.

    ![](https://ajeuwbhvhr.cloudimg.io/colony-recorder.s3.amazonaws.com/files/2024-10-15/52e50d9e-e76f-4c48-8ea7-e18f0388a5b6/user_cropped_screenshot.jpeg?tl_px=2302,267&br_px=4022,1228&force_format=jpeg&q=100&width=1120.0&wat=1&wat_opacity=1&wat_gravity=northwest&wat_url=https://colony-recorder.s3.amazonaws.com/images/watermarks/ee0000_standard.png&wat_pad=524,277)


### Component selection

In the case of a TenderBox that involved multiple **components**, you will first be presented with a list of those component names, click the component name to access the corresponding **Bid Assessment** page.

![](../img/bid-assessment-component-selection.png)


---


## Overview of the Bid Assessment page

![](../img/bid-assessment-overview.png)

1. **Action buttons**: These will become enabled when at least one of the bid submissions in the list has been selected by checking the selection checkbox (3), they can be used to **disqualify bids**, **qualify bids**, or **award contracts** (see [Awarding Contracts](../contracts/awarding-contracts.md)).
2. **Component name**: This reflects the component name of the current assessment page.
3. **Selection checkboxes**: Used to select one or more bids in order to execute an action (1) on the selected bids.
4. **Status indicators**: A tick or cross indicates that a certain bid is either qualified or disqualified respectively. A trophy symbol indicates that this bid is a winning bid and a contract has been awarded to the supplier.
5. **Supplier name**: The name of the supplier for a particular bid, this is a clickable link which leads to the relevant supplier's contact record in CiviCRM.
6. **Details toggle**: Clicking this will expand / collapse a more detailed summary of an individual bid's scores.
7. **View button**: Click to view the bid submission.
8. **Assess button**: Click to assess the bid submission.
9. **History button**: Click to view the history of the assessment changes made to this bid submission.
10. **Scoring summary**: These columns provides a summary of the current assessment results for each bid.

### Viewing a bid's detailed scoring summary

![](../img/bid-assessment-scoring-detail.png)

Clicking the **Details toggle** (point 6 above) will expand a colour-coded table containing rows for each of the following:

1. **Mandatory**: The bid's results for the Mandatory phase.
2. **Functionality**: The bid's results for the Functionality phases, of which there may be one or more depending on the particular tender requirements and TenderBox configuration. One row will be included for each existing Functionality phase, labeled with the name of the phase.
3. **Functionality result**: The overall functionality result for this bid.

Each of these rows provide detail for 3 columns:

1. **Pass**: This reflects the percentage required for a pass. For the **Functionality result** row the "pass type" is shown - usually "pass each" which means each functionality phase needs to be passed in order to qualify for the following one.
2. **Score**: The current score that this bid has achieved based on its assessment.
3. **Assessed**: This reflects the progress of the assessment of this bid for this phase. The colour of this table cell will range from black to bright green according to the level of completion.

For the **Functionality result** row, the last table cell spans across both columns (2 and 3 above), and reflects the overall status - **PASSED** (in a green cell) or **FAILED** (in a red cell).

This format allows the viewer to get key insights into the progress and result of the bid's assessment across all phases with a quick glance.


---


## Assessing a bid


---


## Viewing a bid's assessment history


---

