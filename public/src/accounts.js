function findAccountById(accounts, id) {
  let found = accounts.find((account) => account.id === id);
  return found;
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accA , accB) => accA.name.last > accB.name.last ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0;
  let accId = account.id;
  books.forEach(book => book.borrows.forEach(borrowed => { if (accId === borrowed.id) total++ }))
  return total;
}


function getBooksPossessedByAccount(account, books, authors) {
  let booksHad = [];
  books.forEach((book) => {
    let borrowed = book.borrows;
    if (
      borrowed.find((borrow) => borrow.id === account.id && borrow.returned === false)) {
    booksHad.push(book);
    }
});
booksHad.forEach((book) => {
  let author = authors.find((person) => person.id === book.authorId);
  book['author'] = author;
});
return booksHad;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
