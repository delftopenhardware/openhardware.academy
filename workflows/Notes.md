DESCRIPTION:
Here we describe processes related to the academy preparation and execution. The processes may express activities and workflows that can be executed by persons or by automated workflows. 

EPIC: Publication and distribution of OHAcademy materials
STORY: I would like to automatically publish to zenodo once I have reviewed and commited a new lesson.
    - AC: Each lesson should be archived independently
    - AC: Each lesson should be versioned
    - AC: This should be done automatically using something like fairly

EPIC: Challenges for participants
STORY: We would experienced hardware developers and people that are familiar with the academy to provide us with challenges that we can post and share for new participants. For that we would like to have a tool or a tool kit to develop an open hardware challenge.
    - AC: The challenge should express prerequistes considering aspects of time, location, availability, budget, etc.
    - AC: The challenge could be a component of a project.
    - AC: The challenge could be to develop a derivative product based on a component such as a development board.
    - AC: The project can include a replication element, but some improvement or development needs to be provided upfront as a challenge for example.
    - AC: The challenge should have a contact person.

    TASKS:
    - Provide a challenge template
    - Write down challenges
    - Find interesting development boards....

EPIC: Automate Open Hardware and Delft Open Hardware workflows
A dashboard with a list of workflows that automatically handles different things including twitter posts, email sending, creating templates, and lists based on form submissions
    - AC: The dashboard should be able to handle different workflows
    - AC: The dashboard should list all Delft Open Hardware workflows

STORY: Challenge submission workflow
Workflow description: (Similar to what we do now at the DCC)
- When a challenge is submitted via a form a new issue is created in the open hardware academy repository.
- The issue is labeled as a challenge submission.
- The submitter is notified via email that the challenge has been submitted, and that a new issue has been created, 
as well as a document.
- It goes to a board for challenge review and discussion.
- If the challenge is accepted then the issue is labeled as accepted and it is published in the website.


STORY: Workflow to tweet and email specific stories based on scheduling metadata of the posts using google scripts.
    - AC: The workflow should be able to handle different types of posts
    - AC: The workflow should be able to handle different types of social media
    - AC: The workflow should be able to handle different types of email lists
    - AC: The workflow should be able to handle different types of scheduling
    

