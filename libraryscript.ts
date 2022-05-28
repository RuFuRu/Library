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
let counter: number = -1;

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
    
    let object = new Book(author.value,(title.value).toUpperCase(),genre.value,pageNum.valueAsNumber,answerYes.checked,answerNo.checked)
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
    let hr: HTMLHRElement[] = [];

    for(let i = 0; i < 4; i++) {
        hr.push(document.createElement('hr'));
    }

    bookCardContainer.classList.add('library-card');
    colourStrip.classList.add('colour-strip');
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