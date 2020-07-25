// array a
// each object in the array has two integer properties denoted by x and y.
// function must return a couf of all such objects o in array a

// My initial attempt
function getCount(objects) {
  let counter = 0;
  for (let object = 0; object < objects.length; object++) {
    let currentObject = objects[object];
    if (currentObject.x == currentObject.y) {
      counter += 1;
    }
  }
  console.log(counter);
}
getCount([
  (object1 = {
    x: 1,
    y: 1,
  }),
  (object2 = {
    x: 2,
    y: 3,
  }),
  (object3 = {
    x: 3,
    y: 3,
  }),
  (object4 = {
    x: 3,
    y: 4,
  }),
  (object5 = {
    x: 4,
    y: 5,
  }),
]);

// the forEach method calls a function once for each element in an array, in order.

function getCount(objects) {
  let counter = 0;
  objects.forEach(function (o) {
    if (o.x == o.y) {
      counter += 1;
    }
  });
  console.log(counter);
  return counter;
}
getCount([
  (object1 = {
    x: 1,
    y: 1,
  }),
  (object2 = {
    x: 2,
    y: 3,
  }),
  (object3 = {
    x: 3,
    y: 3,
  }),
  (object4 = {
    x: 3,
    y: 4,
  }),
  (object5 = {
    x: 4,
    y: 5,
  }),
]);

///////////////
function getCount(objects) {
  let counter = 0;
  for (let o in objects) {
    if (objects[o].x == objects[o].y) {
      counter += 1;
    }
  }
  console.log(counter);
  return counter;
}
getCount([
  (object1 = {
    x: 1,
    y: 1,
  }),
  (object2 = {
    x: 2,
    y: 3,
  }),
  (object3 = {
    x: 3,
    y: 3,
  }),
  (object4 = {
    x: 3,
    y: 4,
  }),
  (object5 = {
    x: 4,
    y: 5,
  }),
]);
