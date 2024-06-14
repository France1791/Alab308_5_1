// Take an array of numbers and return the sum.

function addArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
const numbers = [1, 2, 3, 4, 5];
console.log(addArray(numbers)); 
// Take an array of numbers and return the average.


function avrNumber(arr) {
    let sum = 0;
    let average = [];
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
        average = sum / arr.length;
    }
    return average;
}
const avr = [1, 2, 3, 4, 5]
console.log(avrNumber(avr));
// Take an array of strings and return the longest string.

function longestStr (arr){
    let longest = " "
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > longest.length){
            longest = arr[i]
        }
    }
    return longest;
}
  
const strings = ["apple", "banana", "orange", "grapefruit"];
console.log(longestStr(strings));
// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 