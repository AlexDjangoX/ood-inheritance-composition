class LibraryCatalogue {
  constructor() {
    this.items = [];
  }

  addToStock(item) {
    this.items.push(item);
  }

  isNotAvailable(item) {
    return !this.items.includes(item);
  }
  checkIn(item) {
    if (this.isNotAvailable(item)) throw new Error("item is not available");
    return item.checkIn();
  }

  checkOut(item) {
    if (this.isNotAvailable(item)) throw new Error("item is not available");
    return item.checkOut();
  }
}

module.exports = LibraryCatalogue;
