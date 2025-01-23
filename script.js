// initialize book shelf array with some books 
let books=["the Great Gatsby","sons and lovers","To kill a mocking Bird","harry poter","Percy Jackson"];

//Add book to the front using unshift
function AddToFront(){
    let bookInput = document.getElementById("bookInput");
    let newbook = bookInput.ariaValueMax.trim();
    console.log(newbook);
    if(newbook){
        bookInput.unshift(newbook);
        bookInput.value='';
        displaybook();
    }

}

// Add book to the end using push
function AddToEnd()
{let bookInput = document.getElementById("bookInput");
let newbook = bookInput.ariaValueMax.trim();
console.log(newbook);
if(newbook){
    bookInput.push(newbook);
    bookInput.value='';
    displaybook();
}
}

// remove book from the front using shift 
function removeFromFront(){
    if(books.length > 0 ){
        const removebook=books.shift();
        console.log(removebook);
        displaybook();
    }


}

// remove book from the end using pop
function removeFromEnd(){
    if(books.length > 0 ){
        const removebook=books.pop();
        console.log(removebook);
        displaybook();
    }
}

// Display current book 
function displaybook(){
    let booklist= document.getElementById("booklist");
    let html =  `<strong>Front of shelf </strong><br>`;

    //loop to display the array element 
    books.forEach((i,index)=>{
        html += `${index + 1}. ${i}<br>`;
    });


    html +=`<strong>End of Shelf</strong>`;
    booklist.innerHTML= html;

}

// call Display books function
displaybook();
console.log(books);