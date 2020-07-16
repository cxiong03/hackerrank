function getArea(length, width) {
    let area = length * width;

    console.log(area);
    return area;
};

function getPerimeter(length, width) {
    let perimeter = 2 * (length + width);

    console.log(perimeter);
    return perimeter;
};

getArea(3, 4.5),
getPerimeter(3, 4.5);