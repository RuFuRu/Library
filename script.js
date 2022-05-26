let myLibrary = ['The Hobbit','86','The Witcher','Shinsekai Yori', 'No Longer Human'];

function addBook(input) {
    return myLibrary.push(input);
}

function book() {
    //constructor
}

function displaySomeBooks(library) {
    const container = document.querySelector('main');
    let element;
    for(let i = 0; i < library.length; i++) {
        element = document.createElement('p');
        element.textContent = library[i];
        container.appendChild(element);
    }
}

displaySomeBooks(myLibrary);