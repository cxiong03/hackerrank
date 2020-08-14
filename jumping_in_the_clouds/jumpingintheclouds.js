// function jumpingOnClouds(c) {
//   let jumps = [];

//   for (let current = 0; current < c.length; current++) {
//     if (c[current] === 0) {
//       if (c[current] === c[current + 1] && c[current + 1] === c[current + 2]) {
//         jumps.push(c[current + 2]);
//       } else if (c[current] === c[current + 1]) {
//         jumps.push(c[current + 1]);
//       } else {
//         jumps.push(c[current]);
//       }
//     }
//     console.log(jumps.length);
//   }
// }
// jumpingOnClouds([0, 1, 0, 0, 0, 1, 0]);

function jumpingOnClouds(c) {
  let count = 0;
  for (let i = 0; i < c.length - 1; i++, count++) {
    if (i < c.length - 2 && c[i + 2] === 0) i++;
  }
  return count;
}
jumpingOnClouds([0, 1, 0, 0, 0, 1, 0]);
