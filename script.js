function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const myLibrary = [];

function addBookToLibrary() {
    // TODO
}

// Form handling
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('add-book');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const book = new Book(e.target.title.value, e.target.author.value, e.target.pages.value, e.target.read.checked);
        console.log(book);
    });
});

const dialog = document.querySelector('#add-dialog');
const showButton = document.querySelector('#show-dialog');
const closeButton = document.querySelector('#close-dialog');

showButton.addEventListener('click', () => {
    dialog.showModal();
});

closeButton.addEventListener('click', () => {
    dialog.close();
});
