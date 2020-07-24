// best record
// worst record

function breakingRecords(scores) {
  let bestRecord = 0;
  let worstRecord = 0;
  let highScore = (lowScore = scores[0]); // this assigns score[0] to lowScore then lowScore is assign to highScore

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > highScore) {
      highScore = scores[i];
      bestRecord++;
      //   console.log(bestRecord);
    }
    // the else if is used because once the first if is run and is true then it will stop
    else if (scores[i] < lowScore) {
      lowScore = scores[i];
      worstRecord++;
      //   console.log(worstRecord);
    }
  }
  return [bestRecord, worstRecord];
}
breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]);
