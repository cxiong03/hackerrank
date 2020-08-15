function bonAppetit(bill, k, b) {
  let sum = 0;

  for (let i = 0; i < bill.length; i++) {
    if (i != k) {
      sum += bill[i];
    }
  }
  if (sum / 2 === b) {
    return "Bon Appetit";
  } else {
    return Math.abs(b - sum / 2);
  }
}
console.log(bonAppetit([3, 10, 2, 9], 1, 12));
