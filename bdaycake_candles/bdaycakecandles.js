function birthdayCakeCandles(ar) {
  let counter = 0;
  let max = Math.max(...ar);
  //   console.log(max);
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] == max) counter++;
  }
  return counter;
}
birthdayCakeCandles([3, 2, 1, 3]);
