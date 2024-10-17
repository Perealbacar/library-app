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
        createRow(myLibrary[i], i);
        i++;
    }
}

function createRow(book, index){
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

    let deleteForm = document.createElement("td");
    let deleteButton = document.createElement("button")
    deleteButton.setAttribute("class", "delete");
    deleteButton.setAttribute("index", index);
    tr.appendChild(deleteForm);
    deleteForm.appendChild(deleteButton);

    bookTable.appendChild(tr);

    tr.setAttribute("data-row", index);
}
let bookForm = document.getElementById("book-form");
let formTitle = document.getElementById("title");
let formAuthor = document.getElementById("author");
let formPages = document.getElementById("pages");
let formRead = document.querySelector("#read");
const addBookButton = document.querySelector(".submit");
const greetingOutput = document.querySelector(".test");

addBookButton.addEventListener('click', (event)=> {
    event.preventDefault();
    const newBook = new Book(formTitle.value, formAuthor.value, formPages.value, formRead.checked)
    addBookToLibrary(newBook);
    createRow(newBook, (myLibrary.length -1));
    setDeleteButton();
})

addAllBooks();

listAllBooksInTable();

let deleteButton;
function setDeleteButton(){
    deleteButton = document.querySelectorAll(".delete");
}
setDeleteButton();
deleteButton.forEach(button => {
    button.addEventListener('click', (event)=>{
    event.preventDefault();
    
    let index = event.target.getAttribute("index");
    let row = document.querySelector(`tr[data-row="${index}"]`);
    if(row){
        row.remove();
    }
});
});



