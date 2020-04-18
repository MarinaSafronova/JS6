"use strict";
let Ozan = ['Ozan', 'Mehmet', 'Dolunay'];

const People =[
    {name: "Ozan", age: 29, budget: 2000},
    {name: "Uraz", age: 36, budget: 3000},
    {name: "Cenk", age: 29, budget: 4000},
    {name: "Mert", age: 26, budget: 4000},
    {name: "Ozan", age: 29, budget: 5200}
];

People.forEach(function(item, i, arr){
    console.log(item);
    console.log(i);
    console.log(arr);
});
