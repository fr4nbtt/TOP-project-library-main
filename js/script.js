"use strict";

const myLibrary = [];

/* Book Constructor function */
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

/* Test */
addBookToLibrary("The Dark", "Mark Boer", 321, true);
addBookToLibrary("VSC History", "Radu Vida", 141, false);
console.table(myLibrary);
