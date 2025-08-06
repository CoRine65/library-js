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


//testing
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, false);
addBookToLibrary("1984", "George Orwell", 328, true);

console.log(myLibrary);
