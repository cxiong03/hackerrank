// Implement a Polygon class
class Polygon {
  // constructor that takes an array of integer side lengths
  constructor(array) {
    this.array = array;
  }
  // perimeter method that returns the sum of the Polygon's side lengths
  perimeter() {
    let res = 0;
    for (let i = 0; i < this.array.length; i++) {
      res += this.array[i];
    }
    return res;
  }
}

const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());
