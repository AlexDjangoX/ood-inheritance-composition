const LoanItems = require("./loanItems");

class Newspaper extends LoanItems {
  checkIn() {
    throw new Error("newspapers are not available for loan");
  }

  checkOut() {
    throw new Error("newspapers are not available for loan");
  }
}

module.exports = Newspaper;
