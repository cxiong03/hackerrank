// reverse string s
// use the split, reverse, and join methods
// if an exception is thrown catch it and print the contents of the exception's message on
// a new line
// print s on a new line. if no exception is thrown then this should be the reversed string
// if an exception is thrown this should be the original string.

function reverseString(s) {
  try {
    s = s.split("").reverse().join("");
  } catch (err) {
    console.log(err.message);
  } finally {
    console.log(s);
  }
}

reverseString("1234");
