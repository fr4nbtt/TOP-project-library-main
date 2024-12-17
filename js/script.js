"use strict";

/* Selectors */
const libraryContainer = document.querySelector("#library-container");

/* Library array of book objects */
const myLibrary = [];

/* Book Constructor function */
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

/*  */
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  displayBooks();
}

/*  */
function displayBooks() {
  libraryContainer.innerHTML = "";

  myLibrary.forEach((book) => {
    // Create a new element for each book
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    // Add book details (title, author, etc.)
    bookCard.innerHTML = `
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Read: ${book.read ? "Yes" : "No"}</p>
      `;

    // Append to the library container
    libraryContainer.appendChild(bookCard);
  });
}

/* Tests */
addBookToLibrary("The Dark", "Mark Boer", 321, true);
addBookToLibrary("VSC History", "Radu Vida", 141, false);
addBookToLibrary("Old World Jazz", "Andrea Redthorn", 243, true);
console.table(myLibrary);
