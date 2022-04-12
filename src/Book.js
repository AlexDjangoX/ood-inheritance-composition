const LoanItems = require("./LoanItems");

class Book extends LoanItems {
  constructor(title, author) {
    super(title);
    this.author = author;
  }
}

module.exports = Book;
