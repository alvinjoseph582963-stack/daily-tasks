//Prime Checker 

function isPrime(n) {

    if (n <= 1) {
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(7));

//leap year

function isLeapYear(year) {
 if (year % 4 === 0 ) {
    return true;
    }

    else {
        return false;
    }

}
console.log(isLeapYear(2024));

//arrow function

const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));

const isEven = (n) => {
    if (n % 2 === 0) {
        return true;
    } else {
        return false;
    }
};
console.log(isEven(8));

//Default Greeting

function greetUser(name = "Guest") {
    return "Hello, " + name;
}

console.log(greetUser());

//scope demo

function firstFunction() {
    let message = "Hello alvin";
    console.log(message);
}

function secondFunction() {
    let message = "Hello joseph";
    console.log(message);
}

firstFunction();
secondFunction();