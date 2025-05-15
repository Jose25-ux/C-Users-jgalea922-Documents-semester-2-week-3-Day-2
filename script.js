// Initialize book shelf array with some books
let books = ["The Great Gatsby", "Sons and Lovers", "To Kill a Mockingbird", "Harry Potter", "Percy Jackson"];

// Add book to the front using unshift
function AddToFront() {
    let bookInput = document.getElementById("bookInput");
    let newBook = bookInput.value.trim(); // Use 'value' instead of 'ariaValueMax'
    console.log(newBook);
    if (newBook) {
        books.unshift(newBook); // Add to 'books' array, not 'bookInput'
        bookInput.value = ''; // Clear input field
        displayBooks(); // Correct function name
    }
}

// Add book to the end using push
function AddToEnd() {
    let bookInput = document.getElementById("bookInput");
    let newBook = bookInput.value.trim(); // Use 'value' instead of 'ariaValueMax'
    console.log(newBook);
    if (newBook) {
        books.push(newBook); // Add to 'books' array, not 'bookInput'
        bookInput.value = ''; // Clear input field
        displayBooks(); // Correct function name
    }
}

// Remove book from the front using shift
function removeFromFront() {
    if (books.length > 0) {
        const removedBook = books.shift(); // Remove from 'books' array
        console.log(removedBook);
        displayBooks(); // Correct function name
    }
}

// Remove book from the end using pop
function removeFromEnd() {
    if (books.length > 0) {
        const removedBook = books.pop(); // Remove from 'books' array
        console.log(removedBook);
        displayBooks(); // Correct function name
    }
}

// Display current books
function displayBooks() {
    let bookList = document.getElementById("booklist");
    let html = `<strong>Front of Shelf:</strong><br>`;

    // Loop to display the array elements
    books.forEach((book, index) => {
        html += `${index + 1}. ${book}<br>`;
    });

    html += `<strong>End of Shelf</strong>`;
    bookList.innerHTML = html;
}

// Call displayBooks function initially
displayBooks();
console.log(books);
