const Article = require("../src/Article.js");
const Author = require("../src/Author.js");

describe("Article", () => {
  let article;
  beforeEach(() => {
    article = new Article("My Lovely Book", new Author("Alex", 678));
  });

  describe("#constructor", () => {
    it("has a title", () => {
      expect(article.title).toEqual("My Lovely Book");
    });

    it("is not on loan", () => {
      expect(article.isOnLoan()).toEqual(false);
    });

    it("has a name", () => {
      expect(article.author.name).toEqual("Alex");
    });

    it("has a number", () => {
      expect(article.author.number).toEqual(678);
    });
  });

  describe("#checkOut", () => {
    it("sets the article to be on loan", () => {
      article.checkOut();
      expect(article.isOnLoan()).toEqual(true);
    });

    it("raises an error if the article is already on loan", () => {
      article.checkOut();
      expect(() => article.checkOut()).toThrowError(
        "item is currently on loan"
      );
    });
  });

  describe("#checkIn", () => {
    it("sets the article to not be on loan", () => {
      article.checkOut();
      article.checkIn();
      expect(article.isOnLoan()).toEqual(false);
    });

    it("raises an error if the article is not on loan", () => {
      expect(() => article.checkIn()).toThrowError(
        "item is not currently on loan"
      );
    });
  });
});
