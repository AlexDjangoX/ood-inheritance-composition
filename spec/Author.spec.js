const Author = require("../src/Author.js");

describe("Author", () => {
  let author;
  beforeEach(() => {
    author = new Author("Alex", 678);
  });

  describe("#constructor", () => {
    it("has a name", () => {
      expect(author.name).toEqual("Alex");
    });

    it("has number", () => {
      expect(author.number).toEqual(678);
    });
  });
});
