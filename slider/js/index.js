"use strict";

/*
let Mass = ["jas", 'lll', '1', 2, 3];
let st = true;


(function MyFunction() {
    for(let i = 0; i < Mass.length; i++){
        console.log(i);
    }
})(Mass);

console.log(typeof st);*/

let look = {
    color: 'green',
    jeans: "Moms",
    changBottom:{
        brand: 'Zara',
        price:25
    }
};

const B = {
    first: "jopa",
    two: "popa"
};
const A ={
    first: "look",
    third: "ppppp"
};

const END ={
    ...B,
    ...A
};
console.log(END);
