function Book(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = year;
}

const book1 = new Book('book one', 'John', '1996');
const book2 = new Book('book two', 'Jane Doe', '2003');
console.log(book1);
console.log(book2);