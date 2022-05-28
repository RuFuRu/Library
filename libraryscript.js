"use strict";
const popUp = document.querySelector('.pop-up');
const overlay = document.querySelector('.overlay');
const addBook = document.querySelector('.add-book');
addBook === null || addBook === void 0 ? void 0 : addBook.addEventListener('click', () => {
    popUp === null || popUp === void 0 ? void 0 : popUp.classList.add('active');
    overlay === null || overlay === void 0 ? void 0 : overlay.classList.add('active');
});
overlay === null || overlay === void 0 ? void 0 : overlay.addEventListener('click', () => {
    popUp === null || popUp === void 0 ? void 0 : popUp.classList.remove('active');
    overlay.classList.remove('active');
});
class Book {
    constructor(author, title, genre, numOfPages, read) {
        this.author = author;
        this.title = title;
        this.genre = genre;
        this.numOfPages = numOfPages;
        this.read = read;
    }
}
