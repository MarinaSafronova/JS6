"use strict";
let Ozan = ['Ozan', 'Mehmet', 'Dolunay'];

const People =[
    {name: "Ozan", age: 29, budget: 2000},
    {name: "Uraz", age: 36, budget: 3000},
    {name: "Cenk", age: 16, budget: 4000},
    {name: "Mert", age: 26, budget: 4000},
    {name: "Ozan", age: 17, budget: 5200}
];

People.forEach(function(item, i, arr){
   /* console.log(item);
    console.log(i);
    console.log(arr);*/
});

const TwoMass = People.map(function (item) {
    return item.age;
});

console.log(TwoMass);

const AgeFilter = People.filter(function (item) {
    if(item.age <=18){
        return true;
    }
});
console.log(AgeFilter);