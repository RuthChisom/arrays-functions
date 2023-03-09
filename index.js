// Question 1: What are the differences between mutating array methods and non-mutation array methods in JavaScript. List 5 array methods that fall under each of them.
/*
    Mutating Array Methods change the array, after the method has been used. They add or remove elements from the array or modify existing elements.
    Examples are: array.push(), array.unshift(), array.pop(), array.shift(), array.splice()

    Non-Mutating Array Mathods do not change the array,after the method has been used. They create a new array from thr elements of the original array, but do not modify the origina array.
    Examples are: array.concat(), ...array, array.filter(), array.slice(), array.map()
*/


// Question 2: Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them 
const languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
console.log(languages);
// 1. Add ‘Kotlin’ to the end of the array
languages.push('Kotlin');
console.log(languages);
// 2. Add ‘Java’ after ‘Ruby’
languages.splice(3,0,'Java');
console.log(languages);
// 3. Remove the first item in the array
languages.shift();
console.log(languages);
// 4. Add ’Scala’ and ‘Swift’ to the beginning of the array
languages.unshift('Scala','Swift')
console.log(languages);
// 5. Replace ‘PHP’ with ‘Go’ and ‘Rust’
languages.splice(5,1,'Go', 'Rust');
console.log(languages);


// Question 3: What will be the value of fruit after calling the function changeFruit?
// let fruit = ['apple', 'mango', 'banana'];
// 		function changeFruit( fruit ) {
//     			fruit[2] = "orange";
//     			return fruit;
// 		}

// Answer
fruit = ['apple', 'mango', 'orange'];


// Question 4: Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
// e.g., max([4, 5, 10, -2]) // maximum value is 10
// const maximumValue = (arr) => Math.m


// Question 5: Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:
// e.g.,
//  valTimesIndex([1,2,3]) // [0,2,6]
// 		valTimesIndex([5,10,15]) // [0,10,30]
const valTimesIndex = (arr) => {
    for(let key of arr){
        console.log(key);
        console.log(arr[key]);

    }
}
let values = [5,10,15];
console.log(valTimesIndex([values]));

