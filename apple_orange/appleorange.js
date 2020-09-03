function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // count
  let count = [0, 0];
  // loop apples
  apples.forEach((apple) => {
    // check for positive values only
    if (apple < 1) return;
    // check distance from house a+m
    let dist = apple + a;
    // distance in range & count-a ++
    if (dist >= s && dist <= t) count[0] += 1;
  });

  // loop oranges
  oranges.forEach((orange) => {
    // check for negative values only
    if (orange > -1) return;
    // check for distance from house b+n
    let dist = orange + b;
    // distance in range & count-b ++
    if (dist >= s && dist <= t) count[1] += 1;
  });
  count.forEach((count) => console.log(count));
  return;
}

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);

////////////
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const startOfHouse = s;
  const endOfHouse = t;
  const locationOfAppleTree = a;
  const locationOfOrangeTree = b;
  const locationOfAppleDrops = apples.slice();
  const locationOfOrangeDrops = oranges.slice();
  let applesThatAreClose = 0;
  let orangesThatAreClose = 0;

  for (var i = 0; i < locationOfAppleDrops.length; i++) {
    let distance = locationOfAppleTree + locationOfAppleDrops[i];
    if (distance >= startOfHouse && distance <= endOfHouse) {
      applesThatAreClose++;
    }
  }

  for (var i = 0; i < locationOfOrangeDrops.length; i++) {
    let distance = locationOfOrangeTree + locationOfOrangeDrops[i];
    if (distance >= startOfHouse && distance <= endOfHouse) {
      orangesThatAreClose++;
    }
  }

  console.log(applesThatAreClose);
  console.log(orangesThatAreClose);
}
