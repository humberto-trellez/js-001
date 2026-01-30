"use strict";

let height = 200;
{
    let weight = 100;
    {
        let info = "tall";
        console.log(height);
        console.log(weight);
        console.log(info);
        var otherVariable = 500;
    }
    console.log(height);
    console.log(weight);
    //console.log(info);
}
console.log(otherVariable);

var globalGreeting = "Good ";

function greetingFunction() {
    var localGreeting = " Evening";
    console.log("function:");
    console.log(globalGreeting);
    console.log(localGreeting);
}

greetingFunction();

console.log("main program:");
console.log(globalGreeting);
console.log(localGreeting);