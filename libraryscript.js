"use strict";
const popUp = document.querySelector('.pop-up');
const overlay = document.querySelector('.overlay');
const addBookBtn = document.querySelector('.add-book');
const popUpBtn = document.querySelector('.pop-up-btn');
const libraryCardContainer = document.querySelector('section:nth-child(2)');
addBookBtn.addEventListener('click', () => {
    popUp.classList.add('active');
    overlay.classList.add('active');
});
overlay.addEventListener('click', () => {
    popUp.classList.remove('active');
    overlay.classList.remove('active');
});
popUpBtn.addEventListener('click', addCard);
let myLibrary = [];
let counter = -1;
class Book {
    constructor(author, title, genre, numOfPages, readYes, readNo) {
        this.author = author;
        this.title = title;
        this.genre = genre;
        this.numOfPages = numOfPages;
        this.readYes = readYes;
        this.readNo = readNo;
    }
}
function addBook() {
    const author = document.querySelector('#author');
    const title = document.querySelector('#title');
    const genre = document.querySelector('#genre');
    const pageNum = document.querySelector('#pageNum');
    const answerYes = document.querySelector('.yes');
    const answerNo = document.querySelector('.no');
    let object = new Book(author.value, title.value, genre.value, pageNum.valueAsNumber, answerYes.checked, answerNo.checked);
    myLibrary.push(object);
    console.log(myLibrary);
    counter++;
    console.log(counter);
}
function addCard() {
    addBook();
    const bookCardContainer = document.createElement('div');
    const author = document.createElement('h3');
    const title = document.createElement('h3');
    const genre = document.createElement('h3');
    const numOfPages = document.createElement('h3');
    const ReadorNot = document.createElement('h3');
    author.textContent = myLibrary[counter].author;
    title.textContent = myLibrary[counter].title;
    genre.textContent = myLibrary[counter].genre;
    numOfPages.textContent = myLibrary[counter].numOfPages;
    libraryCardContainer.appendChild(bookCardContainer);
    bookCardContainer.appendChild(author);
    bookCardContainer.appendChild(title);
    bookCardContainer.appendChild(genre);
    bookCardContainer.appendChild(numOfPages);
    /*bookCardContainer.appendChild(ReadorNot);*/
}
// console.log(myLibrary);
