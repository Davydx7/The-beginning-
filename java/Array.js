'use strict'
// ARRAY
// Array() is a constructor function 'Array' being called with new

// let user = new Array // () is not needed in calling constructor functions
// Or: let user = []

// let arr = [];
// let fruits = ['Apple', 'Orange', 'Banana', ]

// // alert( fruits[1]) // Orange
// // alert( 'fruits'[1])

// fruits[4] = 'Mango'
// alert(fruits[6]) // undefined
// alert ( fruits ) // list out the whole array

// array can store strings, numbers, boolean, objects and functions :)
// let arrg = ['Apples', 3, { name: 'Davyd' }, true, () => {alert('hello')}, ];

// arrg[4]() // hello
// alert( arrg[1]) // 3

// for (i = 0; i < arrg.length; i++) {
//     alert( typeof arrg[i] )
// }

// queue: FIFO First in First out
// stack: LIFO Last in First out

// deque: as you wish

// alert( fruits )
// alert( fruits.pop() )
// alert( fruits )
// fruits.push('Tomato') // returns number of element in the array 
// fruits.push(...) is same as fruits[fruits.length] = ...
// alert( fruits )

// alert( fruits.shift())
// alert( fruits.unshift('Pineapple')) // also returns .length after addition
// alert( fruits )

// push and unshift can add multiple items at a time: 'stuff', 'more'

// array is a special type of object, behaves alike

// for (let fruit of fruits) {
//     alert( fruit );
// }

// length of array is writeable, \

// fruits.length = 0
// alert( fruits )

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ]

// alert( matrix[1][1] ) //5
// // alert( typeof matrix) // Object

// alert( String(matrix) ) //1,2,3...,9
// let num = 10 
// alert(num.toString(16)) //a

// alert( [1,2,3] + 6) // 1,2,36

// let style = ['Jazz', 'Blues',]
// style.push('Rock-n-roll');
// style[ Math.floor((style.length -1) / 2) ] = 'Classics'
// alert( style.shift() )
// style.unshift('Rap', 'Reggae')
// alert(style)

// function sumInput() {
//     var nums = []

//     while (true) {
//         let input = prompt('Enter number to be added', '')
//         if(isNaN(input) || input === null || input === '' ) break;
//         nums.push( +input )
//     }

//     let sum = 0
//     for (let num of nums) {
//         sum += num;
//     }
//     return sum;
// }

// alert( sumInput() )

// function getMaxSubSum(arr) {
//     let maxSum = 0;

//     for(let i = 0; i < arr.length; i++) {
//         let sumFixedStart = 0;
//         for(let j = i; j < arr.length; j++) {
//             sumFixedStart += arr[j]
//             maxSum = Math.max(maxSum, sumFixedStart);
//         }
//     }

//     return maxSum;
// }

// alert( getMaxSubSum([-1, 3, -2, 3]))

// MAX SUB ARRAY PROBLEMS SOLVED COMPLETELY!!! :)
// function getMaxSubSum(arr) {
//     let maxSum = -Infinity; // or -Infinity if negatives are considered
//     let currentSum = 0;

//     for (let num of arr) { //each number in arr

//         if (num > maxSum && num >= currentSum + num) { // num and currentSum not negative same time
//             var bestStart = arr.indexOf(num)
//             currentSum = num;
//         } else currentSum += num; // continue addings

//         if (currentSum >= maxSum) {
//             maxSum = currentSum;
//             var bestEnd = arr.indexOf(num)
//         }
//     }
//     return `maxSum = ${maxSum}, bestStart = ${bestStart}, bestEnd = ${bestEnd}`;
// }

// alert( getMaxSubSum([-1, 2, 3, -9])) // 5, 1, 2
// alert( getMaxSubSum([-1, 2, 3, -9, 11])) // 11, 4, 4
// alert( getMaxSubSum([-2, -1, 1, 2])) // 3, 2, 3
// alert( getMaxSubSum([100, -9, 2, -3, 5])) // 100, 0, 0
// alert( getMaxSubSum([1, 2, 3])) // 6, 0, 2
// alert( getMaxSubSum([-1, -2, -3])) // -1, 0, 0
// alert( getMaxSubSum([-8, -44, -7])) // -7, 2, 2

// function Calculator() {
//     this.method = {
//         '+': (a, b) => a + b,
//         '-': (a, b) => a - b
//     }

//     this.calculate = function(str) {
//         let arr = str.split(' '),
//         a = +arr[0],
//         op = arr[1],
//         b = +arr[2];

//         if ( !this.method[op] || isNaN(a) || isNaN(b)) return NaN

//         return this.method[op](a, b)
//     }


//     this.addMethod = function(name, func) {
//         this.method[name] = func;
//     }
// }

// let calc = new Calculator;
// console.log( calc.calculate('3 + 7'))
// calc.addMethod('**', (a, b) => a ** b)
// calc.addMethod('/', (a, b) => a / b))
// calc.addMethod('*', (a, b) => a * b))
// console.log( calc.calculate('2 ** f'))

let David = { name: 'David', surname: 'Olufemi' , age: 20, id: 1}
let Wale = { name: 'Wale', surname: 'Ola' , age: 22, id: 2}
let Shade = { name: 'Shade', surname: 'Fola' , age: 18, id: 3}

let users = [David, Wale, Shade];

// let names = users.map( items => items.name )
// alert(names)

// let usersMapped = users.map( (item) => ({ 
//     fullName: `${item.name} ${item.surname}`, 
//     id : item.id
// }))
// alert( usersMapped[0].fullName )
// alert( usersMapped[0].id )

// function sortByAge(arr) {
//     arr.sort( (a, b) => a.age - b.age )
// }

// sortByAge(users)

// console.log(users[0].name)
// console.log(users[1].name)
// console.log(users[2].name)

// function shuffle(arr) {
//     arr.sort((a, b) => Math.random() < 0.5 ? 1 : -1 )
// }

// let arn = [1, 2, 3];

// let count = {
//     '123': 0,
//     '132': 0,
//     '213': 0,
//     '231': 0,
//     '312': 0,
//     '321': 0,
// }

// for (let i= 0; i < 1000000; i++) {
//     shuffle(arn)
//     count[arn.join('')]++;
// }

// for (let key in count ) {
//     console.log(`${key}: ${count [key]}`)
// }

// console.log('')
// //how to really shuffle with equal probability

// function shuffled (array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1)); //random index from 0 to i

//         //swap elements array[i] and array[j]

//         [array[i], array[j]] = [array[j], array[i]]
//         //or
//         // let t = array[i], array[i] = array[j], array[j] = t
//     }
// }

// let counted = {
//     '123': 0,
//     '132': 0,
//     '213': 0,
//     '231': 0,
//     '312': 0,
//     '321': 0,
// }

// for (let i= 0; i < 1000000; i++) {
//     shuffled(arn)
//     counted[arn.join('')]++;
// }

// for (let key in counted ) {
//     console.log(`${key}: ${counted [key]}`)
// }

// function getAverageAge(arr) {
//     return arr.reduce((acc, user) => acc + user.age / arr.length , 0)
// }

// alert( getAverageAge(users)) 


// THIS WILL BE OPTIMIZED //DONE!
function unique(arr) { 
    // let uniqueArr = []
    // for (let item of arr) {
    //     if ( !uniqueArr.includes(item) ) uniqueArr.push(item)
    // }

    // return uniqueArr;

    return Array.from(new Set(arr)) //super optimized
}

let exp = ['ade', 'bola', 'ade', 'bade', 'lola', 'bade', 'seun', 'bola'];
alert( unique(exp) )


// function groupById(arr) {
//     return arr.reduce( (acc, item) => {
//         acc[item.id] = item;
//         return acc
//         }, {})
// }

// let usersById = groupById(users)

// console.log(usersById)

// Coming back to iterators...
let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        return {
            current: this.from,
            last: this.to,

            next() {
                if( this.current <= this.last) {
                    return {done: false, value: this.current++}
                } else {
                    return {done: true }
                }
            }
        }
    }
}

let ran = Array.from(range)

for (let num of ran) {
    alert(num)
}
