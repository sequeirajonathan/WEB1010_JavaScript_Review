// Create a variable and set its value to the answer of a math equation. It should be a number Value
var equation = 50 + 50;
// Create a variable and set its value to 5 strings being concatenated together using the ‘+’ operator. Each string should be at least 10 characters long. Try and make a real paragraph that a human will be able to read and understand.
var string1 = "This is going " ;
var string2 = "to be a very ";
var string3 = "very long nine ";
var string4 = "months but they ";
var string5 = "will be worth it.";

console.log(string1 + string2 + string3 + string4 + string5);

// Create a variable and use the ES6 string interpolation (back ticks) to set the value of a variable to a string that includes 5 variables whose values are numbers. Use ${} to use these number variables in the string variable.
var n1 = 5;
var n2 = 9;
var n3 = 55;
var n4 = 12;
var n5 = 26;

var stringMixer = `This integer ${n1} is very small this next one ${n2} is a little bigger. This number ${n3} is the age of an old person, this number ${n4} is for sure a teenager, but this numer ${n5}is my age`;
// Create an array that has 4 numbers, 2 strings, 3 comparisons, another array with 3 elements inside.
var myArray = [23,92,13,"Hello","World", 3 > 2, 4 < 1, 5 === 5, ["This",5,true]];
// Create an object that has 4 properties: A number, a string, an array, and an object
var myObj = {
    age: 26,
    name: "Jonathan",
    todo: ["Kill roaches","Make money","Eat chicken"],
    inception : {
        dream: true
    }
}
// Create 5 variables in a js file that is linked to your html file 

var h2 = document.querySelector("h2");
var p = document.querySelector(".lorem");
var div = document.querySelector("#div1");
var inputBar =  document.querySelector('[type="text"]');
var button = document.querySelector("button");
var inputValue;
var imgSrc = '<img src="https://i.redd.it/0nwysq5xmgf01.jpg" alt="Rick and Morty">';


function doStuff (input,src) {
        inputValue = input.value;
        div.innerHTML += src;
        p.textContent = inputValue;
}

function loopit (num) {
    for(let i = 0; i < num; i++) {
        doStuff(inputBar,imgSrc);
    }
}

button.addEventListener("click", function () {
    loopit(5);
});




