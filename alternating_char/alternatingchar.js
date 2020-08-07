function alternatingCharacters(s) {
  let deletions = 0;
  s.split("").forEach((letter, index) => {
    if (letter === s[index + 1]) {
      ++deletions;
    }
  });
  return deletions;
}
alternatingCharacters("AAABBB");
