// Initialize book shelf array with some books 
let books = [
    "The Great Gatsby",
    "Sons and Lovers",
    "To Kill a Mockingbird",
    "Harry Potter",
    "Percy Jackson"
];

// Add book to the front using unshift
function addToFront() {
    let bookInput = document.getElementById("bookInput");
    let newBook = bookInput.value.trim();
    if (newBook) {
        books.unshift(newBook);
        bookInput.value = '';
        displayBooks();
    }
}

// Add book to the end using push
function addToEnd() {
    let bookInput = document.getElementById("bookInput");
    let newBook = bookInput.value.trim();
    if (newBook) {
        books.push(newBook);
        bookInput.value = '';
        displayBooks();
    }
}

// Remove book from the front using shift 
function removeFromFront() {
    if (books.length > 0) {
        books.shift();
        displayBooks();
    }
}

// Remove book from the end using pop
function removeFromEnd() {
    if (books.length > 0) {
        books.pop();
        displayBooks();
    }
}

// Display current books 
function displayBooks() {
    let bookListDiv = document.getElementById("bookList");
    let html = `<strong>Front of shelf</strong><ol>`;
    books.forEach((book) => {
        html += `<li>${book}</li>`;
    });
    html += `</ol><strong>End of Shelf</strong>`;
    bookListDiv.innerHTML = html;
}

// Call displayBooks function on load
displayBooks();
