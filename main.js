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