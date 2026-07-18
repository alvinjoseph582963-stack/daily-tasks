 //Add Two Numbers
function add(a, b) {
    return a + b;
}
console.log(add(20,10));

//Subtract Two Numbers

function subtract(c, d) {
    return c - d;
}
console.log(subtract(10,20));

//Square a Number 

function square(n) {
    return n*n;
}
console.log(square(2));

//Even or Odd

function isEven(n) {
    if (n % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven(8));

//Positive, Negative, or Zero 

function checkNumber(n) {
    if (n > 0) {
        return "Positive";
    } else if (n < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

console.log(checkNumber(10));
console.log(checkNumber(-5));
console.log(checkNumber(0));

//Largest of Three

function largest(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}
console.log(largest(10, 25, 15));

//Rectangle Area

function rectangleArea(length, width) {
    return length * width;
}
console.log(rectangleArea(10, 5));

//Print Your Name

function printName() {
    console.log("Alvin Joseph");
}
printName();