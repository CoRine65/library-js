//create an empty myLibrary array: holds all the boooks
const myLibrary = []

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

//a function to add a book: it goes outside the class because it is not a book, but rather an action
function addBookToLibrary( title, author, pages, isRead) {
    const newBook = new Book(title, author, pages, isRead)
    myLibrary.push(newBook)
}

//a function to loop through myLibrary and display the books
//for each book in the library, create a card and attach it to the page
function displayLibrary() {
    const container = document.getElementById("library-container"); //using DOM to get the div created in the HTML

    container.innerHTML = "";

    myLibrary.forEach(book => {
        const card = document.createElement("div");
        card.classList.add("book-card");

        card.innerHTML = `
        <h3> ${book.title}</h3>
        <p><strong>Author:</strong></p>
        <p><strong>Pages:</strong> ${book.pages}</p>
        <p><strong>Read:</strong> ${book.isRead ? "Yes" : "No"}</p>
        `;

        container.appendChild(card);
    })
}


//adding event listeners 
//showing the form when "New Book" is clicked
const newBookBtn = document.getElementById("new-book-btn");
const bookForm = document.getElementById("book-form")

newBookBtn.addEventListener("click", () =>{
    bookForm.style.display = "block";
})

bookForm.addEventListener("submit", function(event){
    event.preventDefault();
    //getting the values from the form
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = parseInt(document.getElementById("pages").value);
    const isRead = document.getElementById("isRead").checked;
    //testing
    addBookToLibrary(title, author, pages, isRead);
    bookForm.reset();
    bookForm.style.display = "none";

    displayLibrary();
})




//console.log(myLibrary);
//addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, false);
//addBookToLibrary("1984", "George Orwell", 328, true);
displayLibrary();
