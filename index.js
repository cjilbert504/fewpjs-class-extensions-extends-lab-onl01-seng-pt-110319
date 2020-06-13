class Polygon {
    constructor(arrOfSides) {
        this.sides = arrOfSides;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce((acc, side) => acc + side, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        let cond1 = this.countSides * this.sides[0] === this.perimeter;
        let cond2 = this.countSides === 3;

        if (cond1 && cond2) {
            return true;
        } else {
            return false;
        }
    }
}

class Square extends Polygon {
    get area() {
        let oneSide = this.sides.pop();
        return oneSide * oneSide;
    }

    get isValid() {
       let cond1 = this.countSides === 4;
       let cond2 = this.countSides * this.sides[0] === this.perimeter;
       
       if (cond1 && cond2) {
           return true;
       } else {
           return false;
       }
    }
}