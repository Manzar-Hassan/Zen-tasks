class circle{
  constructor(radius, color) {
    this.radius = Number(radius),
    this.color = String(color)
  }

  getRadius() {
    return this.radius;
  }

  setRadius(value) {
    this.radius = value;
  }

  getColor() {
    return this.color;
  }

  setColor(value) {
    this.color = value;
  } 

  toString() {
    return `Circle[radius= ${this.radius}, color= ${this.color}]`
  }

  getArea() {
    return ((22/7)*this.radius*this.radius)
  }

  getCircumference() {
    return (2*(22/7)*this.radius);
  }
}

const cir = new circle(1.0,'red');

console.log(cir.getRadius())
cir.setRadius(7)
console.log(cir.getColor())
cir.setColor('Blue')
console.log(cir.toString())
console.log(cir.getArea())
console.log(cir.getCircumference())