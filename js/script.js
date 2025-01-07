"use strict";

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
  const libraryContainer = document.querySelector("#library-container");
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

/* Event Listeners */

document.addEventListener("DOMContentLoaded", () => {
  const addBookBtn = document.querySelector("#add-book-btn");
  const bookFormContainer = document.querySelector("#add-book-form");
  const bookForm = document.querySelector("#book-form");
  const libraryContainer = document.querySelector("#library-container");

  addBookBtn.addEventListener("click", () => {
    bookFormContainer.classList.toggle("hidden");
  });

  bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const publicationYear = document.querySelector("#publication-year").value;
    const readStatus = document.querySelector("#read-status").value;

    addBookToLibrary(title, author, pages, publicationYear, readStatus);
    bookForm.reset();
    bookFormContainer.classList.add("hidden");
  });
});

/* Tests */
addBookToLibrary("The Dark", "Mark Boer", 321, 2020, "read");
addBookToLibrary("VSC History", "Radu Vida", 141, 2021, "to-read");
addBookToLibrary("Old World", "Andrea Rhorn", 243, 2019, "currently-reading");
addBookToLibrary("CSS Secrets", "Cosimus Voss", 643, 2015, "did-not-finish");
console.table(myLibrary);
