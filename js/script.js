"use strict";

/* Selectors */
const libraryContainer = document.querySelector("#library-container");

/* Library array of book objects */
const myLibrary = [];

/* Book Constructor function */
function Book(title, author, pages, publicationYear, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.publicationYear = publicationYear;
  this.readStatus = readStatus;
}

/* Function to add a book to the library */
function addBookToLibrary(title, author, pages, publicationYear, readStatus) {
  const newBook = new Book(title, author, pages, publicationYear, readStatus);
  myLibrary.push(newBook);
  displayBooks();
}

/* Function to display books */
function displayBooks() {
  libraryContainer.innerHTML = "";

  myLibrary.forEach((book) => {
    // Create a new element for each book
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    // Add book details (title, author, etc.)
    bookCard.innerHTML = `
        <div class="book-info">
          <h3>${book.title}</h3>
          <p>Author: ${book.author}</p>
          <p>Pages: ${book.pages}</p>
          <p>Publication Year: ${book.publicationYear}</p>
          <select id="read-status-${book.title}">
              <option value="read" ${
                book.readStatus === "read" ? "selected" : ""
              }>Read</option>
              <option value="to-read" ${
                book.readStatus === "to-read" ? "selected" : ""
              }>To Read</option>
              <option value="currently-reading" ${
                book.readStatus === "currently-reading" ? "selected" : ""
              }>Currently Reading</option>
              <option value="did-not-finish" ${
                book.readStatus === "did-not-finish" ? "selected" : ""
              }>Did Not Finish</option>
          </select>
        </div>
        <div class="book-cover"><img src="https://greenhousescribes.com/wp-content/uploads/2020/10/book-cover-generic.jpg"></div>
    `;

    // Append to the library container
    libraryContainer.appendChild(bookCard);
  });
}

/* Tests */
addBookToLibrary("The Dark", "Mark Boer", 321, 2020, "read");
addBookToLibrary("VSC History", "Radu Vida", 141, 2021, "to-read");
addBookToLibrary(
  "Old World Jazz",
  "Andrea Redthorn",
  243,
  2019,
  "currently-reading"
);
addBookToLibrary("CSS Secrets", "Cosimus Voss", 643, 2015, "did-not-finish");
console.table(myLibrary);
