function findAuthorById(authors, id) {
  let found = authors.find((author) => author.id === id);
return found;
}

function findBookById(books, id) {
  let found = books.find((book) => book.id === id);
  return found;
}

function partitionBooksByBorrowedStatus(books) {
  let results = books.reduce((acc, book) => {
    if (book.borrows[0].returned) {
      acc[1].push(book)
    } else {
      acc[0].push(book)
    }
    return acc;
  }, [[], []])
  return results;
}

//helper function
function _getAcctById(accounts, id) {
  let found = accounts.find((account) => account.id === id);
  return found;
}

function getBorrowersForBook(book, accounts) {
  let result = [];
  for (let item in book.borrows) {
    result.push(_getAcctById(accounts, book.borrows[item].id));
  }
  for (let item in result) {
    for (let item2 in book.borrows) {
      result[item2]['returned'] = book.borrows[item].returned;
    }
  }
  return result.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
