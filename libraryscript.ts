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

class Book {
    constructor(
        readonly author: string,
        readonly title: string,
        readonly genre: string,
        readonly numOfPages: number,
    ) {}
}


function addCard() {
    let myLibrary: any[] = [];
    let counter: number = -1;

    const author = document.querySelector('#author') as HTMLInputElement;
    const title = document.querySelector('#title') as HTMLInputElement;
    const genre = document.querySelector('#genre') as HTMLInputElement;
    const pageNum = document.querySelector('#pageNum') as HTMLInputElement;
    // const answerYes = document.querySelector('.yes') as HTMLInputElement;
    // const answerNo = document.querySelector('.no') as HTMLInputElement;

    if((author.value && title.value && genre.value && pageNum.value) === '')  {
        return;
    }
    
    let object = new Book(author.value,(title.value).toUpperCase(),genre.value,pageNum.valueAsNumber)
    myLibrary.push(object);
    counter++;


    const bookCardContainer = document.createElement('div');
    
}
// console.log(myLibrary);

function colourRandomizer() {
    let colourArr: string[] = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    let randomColourStr: string = "#";
    for(let i = 0; i < 6; i++) {
        randomColourStr += colourArr[randomInt(0,15)];
    }
    return randomColourStr;
}

function randomInt(min: number, max: number):number {
    return Math.floor(Math.random() * (max - min + 1) + min)
}