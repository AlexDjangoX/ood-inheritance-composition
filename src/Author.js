class Author {
  constructor(name, number) {
    this.name = name;
    this.number = number;
  }

  getName() {
    return this.name;
  }

  getNumber() {
    return this.number;
  }
}

module.exports = Author;