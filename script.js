
//define a book constructor (using a class for clarity (like ruby))
class Book {
    constructor(title, author, pages, isRead){
        this.id = crypto.randomUUID(); //unique idenitifier
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }

    //changing between true or false 
    toggleRead(){
        this.isRead = !this.isRead;
    }
}

//defining a library class to hold books: add, remove, and display books
class Library {
  constructor() {
    this.books = [];
  }

  addBook(title, author, pages, isRead) {
    const newBook = new Book(title, author, pages, isRead);
    this.books.push(newBook);
  }

  removeBook(id) {
    this.books = this.books.filter(book => book.id !== id);
  }

  displayLibrary() {
    const container = document.getElementById("library-container");
    container.innerHTML = "";

    this.books.forEach(book => {
      const card = document.createElement("div");
      card.classList.add("book-card");
      card.setAttribute("data-id", book.id);

      card.innerHTML = `
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Pages:</strong> ${book.pages}</p>
        <p><strong>Read:</strong> ${book.isRead ? "Yes" : "No"}</p>
      `;

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.addEventListener("click", (e) => {
        const bookId = e.target.parentElement.getAttribute("data-id");
        this.removeBook(bookId);
        this.displayLibrary();
      });
      card.appendChild(removeBtn);

      const toggleReadBtn = document.createElement("button");
      toggleReadBtn.textContent = "Toggle Read";
      toggleReadBtn.addEventListener("click", (e) => {
        const bookId = e.target.parentElement.getAttribute("data-id");
        const book = this.books.find(book => book.id === bookId);
        if (book) {
          book.toggleRead();
          this.displayLibrary();
        }
      });
      card.appendChild(toggleReadBtn);

      container.appendChild(card);
    });
  }
}
//create an empty myLibrary array: holds all the boooks
const myLibrary = new Library();

const bookForm = document.getElementById("book-form");
const newBookBtn = document.getElementById("new-book-btn");

// Show the form when "New Book" button is clicked
newBookBtn.addEventListener("click", () => {
  bookForm.style.display = "block";
});

// Handle form submission
bookForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the form values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = parseInt(document.getElementById("pages").value);
  const isRead = document.getElementById("isRead").checked;

  //form validations

  if (!title || !author || !pages){
    alert( "Please fill in all fields!");
    return;
  }
  // Add the book to the library instance
  myLibrary.addBook(title, author, pages, isRead);

  // Clear and hide the form
  bookForm.reset();
  bookForm.style.display = "none";

  // Update the displayed library
  myLibrary.displayLibrary();
});





//a function to add a book: it goes outside the class because it is not a book, but rather an action
//function addBookToLibrary( title, author, pages, isRead) {
//    const newBook = new Book(title, author, pages, isRead)
//    myLibrary.push(newBook)
//}




//console.log(myLibrary);
//addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, false);
//addBookToLibrary("1984", "George Orwell", 328, true);
//displayLibrary();
