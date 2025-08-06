Project page: https://www.theodinproject.com/lessons/javascript-library

Project goal: To create a small library app. 
Lessons prior: Objects and Objects Constructors

Project Objectives:
- OOP
    - structure data using objects or classes
    - create multiple instances of a model(Book) and organize them in a collection (myLibrary)
- Applicate State Management
    - manage an array of book obeject: in memory "database"
    - learn how to keep data (state) and the UI in sync
- DOM Manipulation
    - Dynamically render app to browser
    - Create, append, update and remove DOM elements with JS not HTML
- Event Handling 
    - "listening" to user interactions: clicks, form submission
    - connect user actions to changes in both state and UI
- Working with Forms
    - capture user input through a form
    - validate input and transform it into an object
    - reset or clear the form after submission
- Separation of Concerns
    - separate: logic, UI, DOM
- Code Organization
    - Start structuring code into clear defined fucntions and keep it DRY

--------------------------------------

1. Create Git repository
    - generate: index.html, stylesheet.css, script.js
2. Buidling the Book Factory:
    - define a blueprint (book) for each individual book
    - store all books inside an array (myLibrary): like a database
    - a function that takes in data, builds a book, and stores it into the array
    - generate unique identifier using crypto.randomUUID()