// First approach

// function isPositive(a) {
//   let YES = "YES";
//   let ZeroError = "Zero Error";
//   let negaitve = "Negative Error";

//   if (a >= 1) {
//     return YES;
//   } else if (a == 0) {
//     return ZeroError;
//   } else if (a < 0) {
//     return negaitve;
//   }
// }
// isPositive(-9);

function isPositive(a) {
  if (a > 0) {
    return "YES";
  } else if (a == 0) {
    throw new Error("Zero Error");
  } else {
    throw new Error("Negative Error");
  }
}

isPositive(-9);
