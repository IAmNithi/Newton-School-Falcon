function Book(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = year;
}

Book.prototype.getSummary = function(){
    return `${this.name} was written by ${this.author} in ${this.year}`
}

Book.prototype.getAge = function(){
    const age = new Date().getFullYear() - this.year;
    return `${this.name} is ${age} old`
}

Book.prototype.revise = function(revisedYear){
    this.year = revisedYear;
}

const book1 = new Book('book one', 'john', '1993');
// book1.revise('2001');
console.log(book1);

