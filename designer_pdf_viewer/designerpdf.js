function designerPdfViewer(height, letters) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  var maxHeight = 0;
  for (
    var locationOfLetter = 0;
    locationOfLetter < letters.length;
    locationOfLetter++
  ) {
    var result = alphabet.indexOf(letters[locationOfLetter]);
    if (height[result] > maxHeight) {
      maxHeight = height[result];
    }
  }
  let volume = maxHeight * letters.length;
  return volume;
}
let height = [
  1,
  3,
  1,
  3,
  1,
  4,
  1,
  3,
  2,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
];
let word = "abc";
console.log(designerPdfViewer(height, word));
