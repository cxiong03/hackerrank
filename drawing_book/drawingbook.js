function pageCount(n, p) {
  // n: the number of pages in the book
  // P: the page number to turn to
  const pageTurns = Math.floor(p / 2);
  const totalTurns = Math.floor(n / 2);

  return Math.min(pageTurns, totalTurns - pageTurns);
}
console.log(pageCount(6, 2));
