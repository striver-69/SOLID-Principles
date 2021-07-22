//This says if S is a subtype of T, then objects of type T may be replaced with objects of type S.
//Example if we use animal as a object somewhere using object of dog would just fine there. or any object of subclasses can replace objects of the base or super class.

//here every square is a rectangle but every rectangle is not a square

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  setWidth(width) {
    this.width = width;
  }
  setHeight(height) {
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  setWidth(width) {
    this.width = width;
    this.height = width;
  }
  setHeight(height) {
    this.height = height;
    this.width = width;
  }
}

function increaseRectangleWidth(rectangle) {
  rectangle.setWidth(rectangle.width + 1);
}

const rectangle1 = new Rectangle(10, 2);
const square = new Square(5, 5);

increaseRectangleWidth(rectangle1);
increaseRectangleWidth(square);

console.log(rectangle1.area());
console.log(square.area());
