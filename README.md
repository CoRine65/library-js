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
3. Displaying the books onto the webpage
    - loop through the array and render each book's info onto the webpage
    - learning to create and insert HTML using the DOM
4. Handling HTML Forms in JS
    - collecting user input from the form fields
    - adding new book obkects to the existing myLibrary array
    - update the DOM when a new book is added
    - preventing default form behavior using event.preventDefaul()
    - ERROR: it was printing duplicate of the test values, rather that the inputed information that is because i had put default values, and so anybook inserted would always be the same value. 
5. Add a remove button to each book display
    - removes from the array
    - removes from the DOM
    - ERROR: Uncaught TypeError: Assignment to constant variable
        - Fix: Change const myLibrary = [] to let myLibrary = []
    - ERROR: Uncaught ReferenceError: displayBooks is not defined
        - Fix: Used wrong function call displayBooks() to displayLibrary()
6. Add a toggle button on each book card for reading
    - Add an eventlistener to that button
    - when clicked : find the book in the library and use its data-id
    - call the book's toggleRead()
    - re-render the library