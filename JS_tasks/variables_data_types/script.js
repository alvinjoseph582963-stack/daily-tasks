// personal info line

let name = " Alvin ";
let age = 19;
let city = " Sulthan Bathery ";
console.log ( name,age,city ) ;

// Swap Without a Third Variable 

let a = 4;
let b = 5;
[a,b]= [b,a ];
console.log ("a=",a);
console.log ("b=",b);

// Favourite Movies
let movie1 = "The Dark Knight";
let movie2 = "Inception";
let movie3 = "Dune: Part Two";
let movie4 = "Interstellar";
let movie5 = "The Matrix";
console.log("Favourite Movies are:",movie1, movie2, movie3, movie4, movie5);

// Celsius to Fahrenheit

let Celsius = 7;
let Fahrenheit = (Celsius *  9/5 + 32 );
 console.log (" 7 = Celsius = ",Fahrenheit,"Fahrenheit" );

//null vs undefined

let c = null;
let d ;
console.log(typeof c)
console.log(typeof d)
 
//In null, console.log(typeof c) returns "object". If we remove typeof and write console.log(c),
//  it prints null. For undefined, console.log(typeof d) returns "undefined". If we remove typeof 
// and write console.log(d), it prints undefined.   
