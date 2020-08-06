// function compareTriplets(a, b) {
//   let aPoints = 0;
//   let bPoints = 0;

//   for (let i = 0; i < a.length; i++) {
//     if (a[i] > b[i]) {
//       aPoints++;
//     } else if (a[i] < b[i]) {
//       bPoints++;
//     }
//     return [aPoints, bPoints];
//   }
// }
// compareTriplets([5, 6, 7], [3, 6, 10]);

function compareTriplets(a, b) {
  let score = [0, 0];

  for (let i = 0; i < a.length; i++)
    a[i] > b[i] ? score[0]++ : a[i] < b[i] ? score[1]++ : "";
  console.log(score);
}
compareTriplets([5, 6, 7], [3, 6, 10]);
