const Book = require("../src/Book");
const Author = require("../src/Author");

describe("Book", () => {
  let book;
  beforeEach(() => {
    book = new Book("My Lovely Book", new Author("Alex", 678));
  });

  describe("#constructor", () => {
    it("has a title", () => {
      expect(book.title).toEqual("My Lovely Book");
    });

    it("has a title", () => {
      expect(book.author.name).toEqual("Alex");
    });

    it("has a title", () => {
      expect(book.author.number).toEqual(678);
    });

    it("is not on loan", () => {
      expect(book.isOnLoan()).toEqual(false);
    });
  });

  describe("#checkOut", () => {
    it("sets the book to be on loan", () => {
      book.checkOut();
      expect(book.isOnLoan()).toEqual(true);
    });

    it("raises an error if the book is already on loan", () => {
      book.checkOut();
      expect(() => book.checkOut()).toThrowError("item is currently on loan");
    });
  });

  describe("#checkIn", () => {
    it("sets the book to not be on loan", () => {
      book.checkOut();
      book.checkIn();
      expect(book.isOnLoan()).toEqual(false);
    });

    it("raises an error if the book is not on loan", () => {
      expect(() => book.checkIn()).toThrowError(
        "item is not currently on loan"
      );
    });
  });
});
