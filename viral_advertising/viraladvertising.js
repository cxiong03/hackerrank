function viralAdvertising(days) {
  let likes = 0;
  let shared = 5;
  let counter = 1;
  let totalLikes = 0;

  while (counter <= days) {
    likes = Math.floor(shared / 2);
    shared = likes * 3;
    totalLikes += likes;
    counter++;
    // console.log(shared);
  }

  return totalLikes;
}
console.log(viralAdvertising(4));
