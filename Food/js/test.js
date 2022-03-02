'use strict';

//filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Valdemar'];
//
// const shortNames = names.filter(function (name) {
//     return name.length < 5;
// })
//
// console.log(shortNames);

//map

// let answers = ['IvaN', 'AnNa', 'HeLlO'];
//
// const result = answers.map((item) => item.toLowerCase());
// console.log(result);

//every/some

// const some = [4, 6, 87, 'sdf'];
//
// console.log(some.every(item => typeof(item) === 'number'))

// const arr = [1, 5, 3, 3, 7, 2];
//
// const res = arr.reduce((sum, current) => sum + current, 6);
//
// console.log(res);

// const arr = ['apple', 'peach', 'pepper'];
// const res = arr.reduce((sum, currrent) => `${sum}, ${currrent}`);
//
// console.log(res);

const obj = {
    ivan: 'person',
    ann: 'person',
    dog: 'animal',
    cat: 'animal'
};

const newArray = Object.entries(obj)
    .filter(item => item[1] === "person")
    .map((item => item[0]));


console.log(newArray)