function abbreviation(a, b) {
  a = a.toUpperCase();
  arrayA = a.split("");
  arrayB = b.split("");
  for (i = 0; i < arrayA.length; i++) {
    if (arrayA[i] != arrayB[i]) {
      arrayA.splice(i, 1);
    }
  }
  //   console.log(arrayA);
  //   console.log(arrayB);
  arrayB.join("");
  arrayA.join("");
  console.log(arrayB.toString());
  if (arrayA === arrayB) {
    return "Yes";
  }
  return "No";
  //   arrayB.toString(arrayA);
}
abbreviation(
  "ELEDhEOXIAZQYWOPQIUSSGDCXOHSeYCKSCOYEMEDTGWPlJRZFILHZOBAVMFXdnxn",
  "ELEDEOXIAZQYWOPQIUSSGDCXOHSYCKSCOYEMEDTGWPJRZFILHZOBAVMFX"
);
