// write a class to calculate uber price.

class price{
  constructor(distance, CPK) {           //cpk - cost per kilometer
    this.distanceTravel = distance;
    this.costPerKilometer = CPK;
  }

  calcPrice() {
    return this.distanceTravel*this.costPerKilometer
  }
}

const traveler = new price(45, 35);
console.log(traveler.calcPrice());