'use strict';

const bookList = document.querySelector('.books'),
    books = document.querySelectorAll('.book');

console.log(bookList);
console.log(books);

/*
first decission
bookList.append(books[1]);
bookList.append(books[0]);
bookList.append(books[4]);
bookList.append(books[3]);
bookList.append(books[5]);
bookList.append(books[2]);

*/

bookList.prepend(books[2]);
bookList.prepend(books[5]);
bookList.prepend(books[3]);
bookList.prepend(books[4]);
bookList.prepend(books[0]);
bookList.prepend(books[1]);