function isPositive(a) {
  let YES = "YES";
  let ZeroError = "Zero Error";
  let negaitve = "Negative Error";

  if (a >= 1) {
    return YES;
  } else if (a == 0) {
    return ZeroError;
  } else if (a < 0) {
    return negaitve;
  }
}
isPositive(-9);
