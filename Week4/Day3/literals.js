const Book = {
    name: 'book one',
    author: 'John',
    year: '1996',
    summary: function(){
        return `${this.name} was written by ${this.author} in ${this.year}` 
    }
}

const Book2 = {
    name: 'book Two',
    author: 'Jane doe',
    year: '2003',
    summary: function(){
        return `${this.name} was written by ${this.author} in ${this.year}` 
    }
}

const Book3 = {
    name: 'book Three',
    author: 'Jack Sparrow',
    year: '2010',
    summary: function(){
        return `${this.name} was written by ${this.author} in ${this.year}` 
    }
}

console.log(Book2.summary());