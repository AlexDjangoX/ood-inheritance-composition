const LoanItems = require("./LoanItems");

class Article extends LoanItems {
  constructor(title, author) {
    super(title);
    this.author = author;
  }
}

module.exports = Article;
