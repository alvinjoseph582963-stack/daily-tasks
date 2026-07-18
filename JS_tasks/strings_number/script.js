//Palindrome Check
let string = "madam";

let reversed = "";

for (let i = string.length - 1; i >= 0; i--) {
  reversed += string[i];
}

if (string === reversed) {
  console.log("Palindrome");
} else {
  console.log("Not a Palindrome");
}

//Vowel Counter

let str = "enter";

let count = 0;

for (let i = 0; i < string.length; i++) {
  if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
    count++;
  }
}

console.log("Number of vowels =", count);

//String Reverser

let strrev = "Enter a string";

let reverse = "";

for (let i = strrev.length - 1; i >= 0; i--) {
  reverse += strrev[i];
}

console.log("Reversed String =", reverse);

//Even or Odd

let num = 7;

if (num % 2 === 0) {
  console.log(num + " is Even");
} else {
  console.log(num + " is Odd");
}

//FizzBuzz

for (let i = 1; i <= 50; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }

    else if (i % 3 === 0) {
        console.log("Fizz");
    }

    else if (i % 5 === 0) {
        console.log("Buzz");
    }

    else {
        console.log(i);
    }

}