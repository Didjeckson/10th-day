'use strict';

const bookList = document.querySelector('.books'),
    books = document.querySelectorAll('.book');

/*
first decission*/
bookList.append(books[1]);
bookList.append(books[0]);
bookList.append(books[4]);
bookList.append(books[3]);
bookList.append(books[5]);
bookList.append(books[2]);

/**/
/*
second decission
bookList.prepend(books[2]);
bookList.prepend(books[5]);
bookList.prepend(books[3]);
bookList.prepend(books[4]);
bookList.prepend(books[0]);
bookList.prepend(books[1]);

*/

/*
third decission
books[0].before(books[1]);
books[0].after(books[3]);
// books[3].before(books[5]);
books[3].before(books[4]);
books[2].before(books[5]);

*/

/*
fourth half-worked decission
const book2 = books[0].cloneNode(true);
const book3 = books[4].cloneNode(true);
const book4 = books[3].cloneNode(true);
const book5 = books[5].cloneNode(true);
const book6 = books[2].cloneNode(true);


books[0].replaceWith(books[1]);
books[2].replaceWith(book2);
books[3].replaceWith(books[4]);
books[5].replaceWith(book4);
*/

/*
fifth decission
const book1 = books[1].cloneNode(true);
const book2 = books[0].cloneNode(true);
const book3 = books[4].cloneNode(true);
const book4 = books[3].cloneNode(true);
const book5 = books[5].cloneNode(true);
const book6 = books[2].cloneNode(true);

books[0].replaceWith(book1);
books[1].replaceWith(book2);
books[2].replaceWith(book3);
books[3].replaceWith(book4);
books[4].replaceWith(book5);
books[5].replaceWith(book6);

*/
document.body.style.backgroundImage = ('url(./image/you-dont-know-js.jpg)');

const aContent = books[4].querySelector('a');
aContent.textContent = 'Книга 3. this и Прототипы Объектов';

const delAd = document.querySelector('.adv');
delAd.remove();

const secondBookUl = books[0].querySelectorAll('li');

secondBookUl[1].after(secondBookUl[0]);
secondBookUl[9].after(secondBookUl[2]);
secondBookUl[9].before(secondBookUl[7]);
secondBookUl[3].after(secondBookUl[6]);
secondBookUl[6].after(secondBookUl[8]);

const fifthBookUl = books[5].querySelector('ul'),
    fifthBookLi = books[5].querySelectorAll('li');
console.log(fifthBookUl);
console.log(fifthBookLi);
/* < ul >
    <
    li > Введение < /li> <
    li > Предисловие < /li> <
    li > Глава 4: Генераторы < /li> <
    li > Глава 2: Колбеки < /li> <
    li > Глава 3: Обещания < /li> <
    li > Приложение A: Библиотека: asynquence < /li> <
    li > Глава 5: Производительность программы < /li> <
    li > Глава 6: Бенчмаркинг и настройка < /li> <
    li > Приложение B: Расширенные асинхронные шаблоны < /li> <
    li > Глава 1: Асинхронность: Сейчас и Тогда < /li> <
    li > Приложение C: Благодарности! < /li> <
    /ul> */
fifthBookUl.append(fifthBookLi[1]);
fifthBookUl.append(fifthBookLi[0]);
fifthBookUl.append(fifthBookLi[9]);
fifthBookUl.append(fifthBookLi[3]);
fifthBookUl.append(fifthBookLi[4]);
fifthBookUl.append(fifthBookLi[2]);
fifthBookUl.append(fifthBookLi[6]);
fifthBookUl.append(fifthBookLi[7]);
fifthBookUl.append(fifthBookLi[5]);
fifthBookUl.append(fifthBookLi[8]);
fifthBookUl.append(fifthBookLi[10]);