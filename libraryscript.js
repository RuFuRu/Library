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
    let object = new Book(author.value, (title.value).toUpperCase(), genre.value, pageNum.valueAsNumber, answerYes.checked, answerNo.checked);
    myLibrary.push(object);
    console.log(myLibrary);
    counter++;
    console.log(counter);
}
function addCard() {
    addBook();
    const bookCardContainer = document.createElement('div');
    const colourStrip = document.createElement('div');
    const author = document.createElement('h3');
    const title = document.createElement('h3');
    const genre = document.createElement('h3');
    const numOfPages = document.createElement('h3');
    const ReadorNot = document.createElement('h3');
    let hr = [];
    for (let i = 0; i < 4; i++) {
        hr.push(document.createElement('hr'));
    }
    bookCardContainer.classList.add('library-card');
    colourStrip.classList.add('colour-strip');
    colourStrip.setAttribute('style', `background-color: ${colourRandomizer()}`);
    author.textContent = myLibrary[counter].author;
    title.textContent = myLibrary[counter].title;
    genre.textContent = myLibrary[counter].genre;
    numOfPages.textContent = myLibrary[counter].numOfPages;
    console.log(hr[0]);
    libraryCardContainer.appendChild(bookCardContainer);
    bookCardContainer.appendChild(colourStrip);
    bookCardContainer.appendChild(title);
    bookCardContainer.appendChild(hr[0]);
    bookCardContainer.appendChild(author);
    bookCardContainer.appendChild(hr[1]);
    bookCardContainer.appendChild(genre);
    bookCardContainer.appendChild(hr[2]);
    bookCardContainer.appendChild(numOfPages);
    /*bookCardContainer.appendChild(ReadorNot);*/
}
// console.log(myLibrary);
function colourRandomizer() {
    let colourArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let randomColourStr = "#";
    for (let i = 0; i < 6; i++) {
        randomColourStr += colourArr[randomInt(0, 15)];
    }
    return randomColourStr;
}
function randomInt(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
