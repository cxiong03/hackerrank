function abbreviation(a, b) {
  a = a.toUpperCase();
  arrayA = a.split("");
  arrayB = b.split("");
  for (i = 0; i < arrayA.length; i++) {
    if (arrayA.length < arrayB.length) {
      return "NO";
    }
    if (arrayB[i] != arrayA[i]) {
      arrayA.splice(i, 1);
      i--;
    }
  }
  //   console.log(arrayA);
  //   console.log(arrayB);
  var strA = arrayB.join("");
  var strB = arrayA.join("");
  console.log(strB);
  console.log(strA);
  //console.log(arrayA);
  //console.log(arrayB);
  if (arrayA.toString() == arrayB.toString()) {
    return "Yes";
  }
  return "No";
  //   arrayB.toString(arrayA);
}
console.log(
  abbreviation(
    "ELEDhEOXIAZQYWOPQIUSSGDCXOHSeYCKSCOYEMEDTGWPlJRZFILHZOBAVMFXdnxn",
    "ELEDEOXIAZQYWOPQIUSSGDCXOHSYCKSCOYEMEDTGWPJRZFILHZOBAVMFX"
  )
);
console.log(
  abbreviation(
    "ELEDhEOXIAZQYWOPQIUSVMFXdnxn",
    "ELEDEOXIAZQYWOPQIUSSGDCXOHSYCKSCOYEMEDTGWPJRZFILHZOBAVMFX"
  )
);
