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
console.log(bonAppetit([3, 10, 2, 9], 1, 7));

// Alternative solution
// function bonAppetit(bill, k, b) {
//   const sum = bill.reduce((r, v) => r + v, 0);
//   const result = (sum - bill[k]) / 2;
//   if (b - result === 0) console.log("Bon Appetit");
//   else console.log(b - result);
// }
