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
    constructor(author, title, genre, pageNum, readYes) {
        this.author = author;
        this.title = title;
        this.genre = genre;
        this.pageNum = pageNum;
        this.readYes = readYes;
    }
}
function addCard() {
    const author = document.querySelector('#author');
    const title = document.querySelector('#title');
    const genre = document.querySelector('#genre');
    const pageNum = document.querySelector('#pageNum');
    const answerYes = document.querySelector('.yes');
    if ((author.value && title.value && genre.value && pageNum.value) === '') {
        return;
    }
    let object = new Book(author.value, (title.value).toUpperCase(), genre.value, pageNum.valueAsNumber, answerYes.checked);
    myLibrary.push(object);
    counter++;
    const bookCardContainer = document.createElement('div');
    const titleText = document.createElement('div');
    const authorText = document.createElement('div');
    const genreText = document.createElement('div');
    const pageNumText = document.createElement('div');
    const readTextAndDeleteContainer = document.createElement('div');
    const readYesText = document.createElement('div');
    const readNoText = document.createElement('div');
    const delbtn = document.createElement('div');
    bookCardContainer.classList.add('book-card-container');
    titleText.textContent = myLibrary[counter].title;
    titleText.classList.add('title-text');
    authorText.textContent = myLibrary[counter].author;
    genreText.textContent = myLibrary[counter].genre;
    pageNumText.textContent = myLibrary[counter].pageNum;
    readTextAndDeleteContainer.classList.add('read-text-and-delete-container');
    readYesText.classList.add('read-yes-text');
    readYesText.textContent = "Have read";
    readNoText.classList.add('read-no-text');
    readNoText.textContent = "Have not read";
    delbtn.classList.add('del-btn');
    console.log(myLibrary[counter].readYes);
    if (myLibrary[counter].readYes === true) {
        readYesText.setAttribute('style', 'color: green');
    }
    else if (myLibrary[counter].readYes === false) {
        readNoText.setAttribute('style', 'color: red');
    }
    libraryCardContainer.appendChild(bookCardContainer);
    bookCardContainer.appendChild(titleText);
    bookCardContainer.appendChild(authorText);
    bookCardContainer.appendChild(genreText);
    bookCardContainer.appendChild(pageNumText);
    bookCardContainer.appendChild(readTextAndDeleteContainer);
    readTextAndDeleteContainer.appendChild(readYesText);
    readTextAndDeleteContainer.appendChild(readNoText);
    readTextAndDeleteContainer.appendChild(delbtn);
    delbtn.addEventListener('click', () => {
        libraryCardContainer.removeChild(bookCardContainer);
    });
    readYesText.addEventListener('click', () => {
        readYesText.setAttribute('style', 'color: green');
        readNoText.setAttribute('style', 'color: black');
    });
    readNoText.addEventListener('click', () => {
        readNoText.setAttribute('style', 'color: red');
        readYesText.setAttribute('style', 'color: black');
    });
}
