class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(form){

    if (form === square) {
      let area = square.side * square.side;
      return area;
    }
    else if (form === rectangle) {
      let area = rectangle.width * rectangle.height;
      return area;
    }
    else if (form === circle) {
      let area = 3.14 * circle.radius;
      return area;
    }

  }

}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));