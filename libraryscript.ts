const popUp = document.querySelector('.pop-up');
const overlay = document.querySelector('.overlay');
const addBook = document.querySelector('.add-book');


addBook?.addEventListener('click', () => {
    popUp?.classList.add('active');
    overlay?.classList.add('active');
})

overlay?.addEventListener('click', () => {
    popUp?.classList.remove('active');
    overlay.classList.remove('active');
})