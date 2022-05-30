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
class Book {
    constructor(author, title, genre, numOfPages) {
        this.author = author;
        this.title = title;
        this.genre = genre;
        this.numOfPages = numOfPages;
    }
}
function addCard() {
    let myLibrary = [];
    let counter = -1;
    const author = document.querySelector('#author');
    const title = document.querySelector('#title');
    const genre = document.querySelector('#genre');
    const pageNum = document.querySelector('#pageNum');
    // const answerYes = document.querySelector('.yes') as HTMLInputElement;
    // const answerNo = document.querySelector('.no') as HTMLInputElement;
    if ((author.value && title.value && genre.value && pageNum.value) === '') {
        return;
    }
    let object = new Book(author.value, (title.value).toUpperCase(), genre.value, pageNum.valueAsNumber);
    myLibrary.push(object);
    console.log(myLibrary);
    counter++;
    console.log(counter);
    const bookCardContainer = document.createElement('div');
    const colourStrip = document.createElement('div');
    const authorDiv = document.createElement('h3');
    const titleDiv = document.createElement('h3');
    const genreDiv = document.createElement('h3');
    const numOfPages = document.createElement('h3');
    const ReadorNot = document.createElement('h3');
    let hr = [];
    for (let i = 0; i < 4; i++) {
        hr.push(document.createElement('hr'));
    }
    bookCardContainer.classList.add('library-card');
    colourStrip.classList.add('colour-strip');
    colourStrip.setAttribute('style', `background-color: ${colourRandomizer()}`);
    authorDiv.textContent = myLibrary[counter].author;
    titleDiv.textContent = myLibrary[counter].title;
    genreDiv.textContent = myLibrary[counter].genre;
    numOfPages.textContent = myLibrary[counter].numOfPages;
    console.log(hr[0]);
    libraryCardContainer.appendChild(bookCardContainer);
    bookCardContainer.appendChild(colourStrip);
    bookCardContainer.appendChild(titleDiv);
    bookCardContainer.appendChild(hr[0]);
    bookCardContainer.appendChild(authorDiv);
    bookCardContainer.appendChild(hr[1]);
    bookCardContainer.appendChild(genreDiv);
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
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
