# Technical Assignment - Front End developer

Your assignment is to develop a simple single-page application that presents a weekly calendar.

The application should simply be one view along with a dialog / popup :

- The weekly calendar page
- The event dialog / popup

## Calendar

The calendar should have the following features :

- It should present a week view of the current date where each day of week the can be seen along with its hours in a simple UI
- OK

- It should have a datepicker that will change the calendar's date

- It should have a picker that can switch between calendar users and load theirs events accordingly 

- It should display all the events of the selected user

- It should display a form when the user click on an empty time slot and allow him to create an event in the calendar

### Event

The event page will just display the details of the selected event along with 2 actions :

- delete the selected event
- edit the selected event

### Bonuses :

- Implement a montly view 
- OK
- Implement a daily view
- OK

- Show a preview of the to-be-created event on the calendar while creating / editing an event
- Detect collision when trying to create an event on a non-empty timeslot and display an error message / toast.
- Load the calendar of 2 users side by side to prevent collisions when creating an event 
- Allow drag and drop while selecting an event in the calendar to pass events from one day to another
- Load your own personal calendar from google-calendar in the calendar

Bonuses are just here to give you ideas of what can be achieved if you enjoy this little project but are ABSOLUTELY NOT mandatory

## Requirements

- Your repository should include a `README` file that describes the steps to run your project.
- The only technical requirement is to use some state manager like ngrx / ngxs or any other redux equivalent if you choose not to use angular as a framework.
- The rest of the stack is up to you.

Once you are done, please share a link to your repository

We will also take the following into consideration :

- Maintainability of the code
  - Code linting, test coverage..
  - Documentation
  - Clean code
- User Experience
- Creativity
