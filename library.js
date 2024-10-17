const myLibrary = [];

function Book(title, author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = ((read) ? "read" : "not read yet");

    this.info = function(){
        return (this.title + " by " + this.author + ", " + this.pages + " pages," + this.read)
    }
   // theHobbit.info(); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"

};

function addBookToLibrary(book){
    myLibrary.push(book);
}

const Tolkien = new Book("The Hobbit", "J.R.R. Tolkien", "295", false);
const Tolkien2 = new Book("The Hobbit2", "J.R.R. Tolkien", "295", false);
const Tolkien3 = new Book("The Hobbit3", "J.R.R. Tolkien", "295", false);
const Tolkien4 = new Book("The Hobbit4", "J.R.R. Tolkien", "295", false);

function callBook(book){
    console.log(book.info());
}

function addAllBooks(){
    myLibrary.push(Tolkien,Tolkien2,Tolkien3,Tolkien4)
}

function listAllBooks(){
    let i = 0;
    while(i < myLibrary.length){
        callBook(myLibrary[i]);
        i++;
    }
}

const bookTable = document.querySelector(".book-table");

function listAllBooksInTable(){
    let i =0;
    while(i < myLibrary.length){
        createRow(myLibrary[i]);
        i++;
    }
}

function createRow(book){
    let tr = document.createElement("tr");

    let titles = document.createElement("td");
    titles.textContent = book.title;
    tr.appendChild(titles);

    let authors = document.createElement("td");
    authors.textContent = book.author;
    tr.appendChild(authors);

    let pagess = document.createElement("td");
    pagess.textContent = book.pages;
    tr.appendChild(pagess);

    let reads = document.createElement("td");
    reads.textContent = book.read;
    tr.appendChild(reads);

    bookTable.appendChild(tr)
}

addAllBooks();

listAllBooksInTable();
