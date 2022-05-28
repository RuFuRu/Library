const popUp = document.querySelector('.pop-up') as HTMLDivElement;
const overlay = document.querySelector('.overlay') as HTMLDivElement;
const addBookBtn = document.querySelector('.add-book') as HTMLButtonElement;
const popUpBtn = document.querySelector('.pop-up-btn') as HTMLButtonElement;


addBookBtn.addEventListener('click', () => {
    popUp.classList.add('active');
    overlay.classList.add('active');
});

overlay.addEventListener('click', () => {
    popUp.classList.remove('active');
    overlay.classList.remove('active');
});

popUpBtn.addEventListener('click', () => {
    addBook();
})

let myLibrary: any[] = [];

class Book {
    constructor(
        public author: string,
        public title: string,
        public genre: string,
        public numOfPages: number,
        public readYes: boolean,
        public readNo: boolean,
    ) {}
}

function addBook() {
    const author = document.querySelector('#author') as HTMLInputElement;
    const title = document.querySelector('#title') as HTMLInputElement;
    const genre = document.querySelector('#pageNum') as HTMLInputElement;
    const pageNum = document.querySelector('#pageNum') as HTMLInputElement;
    const answerYes = document.querySelector('.yes') as HTMLInputElement;
    const answerNo = document.querySelector('.no') as HTMLInputElement;
    
    let object = new Book(author.value,title.value,genre.value,pageNum.valueAsNumber,answerYes.checked,answerNo.checked)
    myLibrary.push(object);
    console.log(myLibrary)
}

// console.log(myLibrary);