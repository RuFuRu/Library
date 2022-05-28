const popUp = document.querySelector('.pop-up') as HTMLDivElement;
const overlay = document.querySelector('.overlay') as HTMLDivElement;
const addBookBtn = document.querySelector('.add-book') as HTMLButtonElement;
const popUpBtn = document.querySelector('.pop-up-btn') as HTMLButtonElement;
const libraryCardContainer = document.querySelector('section:nth-child(2)') as HTMLDivElement;



addBookBtn.addEventListener('click', () => {
    popUp.classList.add('active');
    overlay.classList.add('active');
});

overlay.addEventListener('click', () => {
    popUp.classList.remove('active');
    overlay.classList.remove('active');
});

popUpBtn.addEventListener('click', addCard);

let myLibrary: any[] = [];

class Book {
    constructor(
        readonly author: string,
        readonly title: string,
        readonly genre: string,
        readonly numOfPages: number,
        readonly readYes: boolean,
        readonly readNo: boolean,
    ) {}
}

function addBook() {
    const author = document.querySelector('#author') as HTMLInputElement;
    const title = document.querySelector('#title') as HTMLInputElement;
    const genre = document.querySelector('#genre') as HTMLInputElement;
    const pageNum = document.querySelector('#pageNum') as HTMLInputElement;
    const answerYes = document.querySelector('.yes') as HTMLInputElement;
    const answerNo = document.querySelector('.no') as HTMLInputElement;
    
    let object = new Book(author.value,title.value,genre.value,pageNum.valueAsNumber,answerYes.checked,answerNo.checked)
    myLibrary.push(object);
    console.log(myLibrary)
}

function addCard() {
    addBook();

    const bookCardContainer = document.createElement('div');
    const author = document.createElement('h3');
    const title = document.createElement('h3');
    const genre = document.createElement('h3');
    const numOfPages = document.createElement('h3');
    const ReadorNot = document.createElement('h3');

    author.textContent = myLibrary[0].author;
    title.textContent = myLibrary[0].title;
    genre.textContent = myLibrary[0].genre;
    numOfPages.textContent = myLibrary[0].numOfPages;

    libraryCardContainer.appendChild(bookCardContainer);
    bookCardContainer.appendChild(author);
    bookCardContainer.appendChild(title);
    bookCardContainer.appendChild(genre);
    bookCardContainer.appendChild(numOfPages);
    /*bookCardContainer.appendChild(ReadorNot);*/
}
// console.log(myLibrary);