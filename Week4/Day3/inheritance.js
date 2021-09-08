function Book(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = year;
}

Book.prototype.getSummary = function(){
    return `${this.name} was written by ${this.author} in ${this.year}`
}

function Magazine(name, author, year, pages){
    Book.call(this, name, author, year);
    this.pages = pages;
}

const mag1 = new Magazine('ESPorts', 'john', '2021', '203');

console.log(mag1);