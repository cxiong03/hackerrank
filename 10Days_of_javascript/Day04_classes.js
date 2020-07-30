// Implement a Polygon class
class Polygon {
  // constructor that takes an array of integer side lengths
  constructor(heights) {
    this.heights = heights;
  }
  // perimeter method that returns the sum of the Polygon's side lengths
  perimeter() {
    let res = 0;
    for (let i = 0; i < this.heights; i++) {
      res += this.heights[i];
    }
    return res;
  }
}
let trianlge = new Polygon([3, 4, 5]);
