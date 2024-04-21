// Constructor for the book class
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Function to create and return a book info card
function createBookCard(book) {
    console.log(book);
    let card = document.createElement('div');
    card.id = 'book-card';
    card.innerHTML = 
        `<p>Title: ${book.title}</p>
        <p>Author: ${book.author}</p>
        <p>Pages ${book.pages}</p>
        <p>Read ${book.read}</p>
        <button class='remove'>Remove</button>`;
    return card;
}

// Form handling for submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('add-book');

    // Submission button to add a new book
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const book = new Book(e.target.title.value, e.target.author.value, e.target.pages.value, e.target.read.checked);
        document.body.appendChild(createBookCard(book));
    });

});

// Event listener to remove a book card
document.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('click', function(e) {
        if (e.target.classList.contains('remove')) {
            console.log(e.target.parentNode);
            e.target.parentNode.remove();
        }
    });
});


// Accessing proper DOM elements for form management
const dialog = document.querySelector('#add-dialog');
const showButton = document.querySelector('#show-dialog');
const closeButton = document.querySelector('#close-dialog');

// Functions to open and close the dialog box
showButton.addEventListener('click', () => {
    dialog.showModal();
});
closeButton.addEventListener('click', () => {
    dialog.close();
});


