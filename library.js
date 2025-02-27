class Library {
    constructor() {
        this.books = [];
    }

    addBook(author, book, year) {
        this.books.push({ author, book, year });
    }

    removeBook(bookTitle) {
        this.books = this.books.filter(book => book.book !== bookTitle);
    }

    listBooks() {
        return this.books;
    }
}


const library = new Library();
library.addBook('George Orwell', 'Nineteen Eighty-Four', 1948);
console.log(library.listBooks());
