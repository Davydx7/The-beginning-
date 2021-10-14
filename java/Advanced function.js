//RECURSION and Execution stack

// function pow(x, n) {
//     if (n == 1) {
//         return x;
//     } else {
//         return (x * pow(x, n - 1));
//     }
// }

// console.log( pow(2, 3))

// Instead of array when shift and unshift can become slow
// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// }

// // console.log(list.next.next.next.value)
// console.log(list.next.value)
// list.next = list.next.next
// console.log(list.next.value)
// list.next = {value:2, next: list.next}
// console.log(list.next.value)
// list = {value:'new', list}
// console.log(list.value)

// let breaks = list.list.next
// list.list.next = null
// console.log(breaks.value)


// let company = {
//     sales: [{
//         name: 'John',
//         salary: 1000
//     }, {
//         name: 'Alice',
//         salary: 1600
//     }],

//     development: {
//         sites: [{
//             name: 'Peter',
//             salary: 2000
//         }, {
//             name: 'Alex',
//             salary: 1800
//         }],

//         internals: [{
//             name: 'Jack',
//             salary: 1300
//         }]
//     }
// }

// function sumSalaries(department) {
//     if (Array.isArray(department)) {
//         return department.reduce((tSalary, worker) => 
//         tSalary + worker.salary, 0)
//     } else {
//         let totalSalary = 0;
//         for (let depts of Object.values(department)) {
//             totalSalary += sumSalaries(depts);
//         }
//         return totalSalary;
//     }
// }

// console.log(sumSalaries(company))

// console.log(Object.entries(company))
// console.log(Object.keys(company))
// console.log(Object.values(company))

// function sumTo(n) { //using for loop
//     let ans = 0
//     for (let i = 1; i <= n; i++) ans += i;
//     return ans;
// }

// function sumTo(n) { //using recursion
//     if( n == 1 ) {
//         return n
//     } else {
//         return n + sumTo(n - 1);
//     }
// }

// function sumTo(n) { //using arithmetic progression formula
//     return n * (2 + n-1) / 2
// }

// console.log( sumTo(100000))

// function factorial(n) { //using recursion
//     return ( n == 1 ) ? 1 : n * factorial(n - 1);
// }

// console.log( factorial(5))


// function fib(n) {
//     let a = 1, b = 1;
//     for ( let i = 3; i <= n; i++) {
//         c = a + b;
//         a = b;
//         b = c
//     }
//     return c;
// }

// console.log(fib(79))


// function printList(list) {
//     console.log(list.value);
//     if (list.next) {
//         printList(list.next);
//     }
// }

// printList(list);

// function printReverseList(list) {
//     if (list.next) {
//         printReverseList(list.next)
//     }

//     console.log(list.value)
// }

// printReverseList(list)

// function arg(...args) {
//     let sum = 0;
//     for (let arg of args) sum += arg;
//     return sum
// }

// console.log(arg(5,6,7))

// function showName( firstname, lastName, ...titles) {
//     console.log(firstname);
//     console.log(lastName);
//     console.log(titles)

//     for (let arg of arguments) console.log(arg) // an array 'argument'
//                                      exists for function parameters
// }
// showName('David', 'Olufemi', 'Mr', 'The', 'Ultimate')

// let arr = [1, 2, 3]
// let arr2 = [3,1, 6, 9]
// console.log(Math.max(...arr, ...arr2))

// let arr3 = [...arr] // easiest way to copy arrays and objects

// console.log( arr3 === arr )
// console.log( JSON.stringify(arr3) === JSON.stringify(arr) )


// function makeCounter () {
//     let count = 0;
    
//     return function(){
//         return count++;
//     };
// }

// let counter = makeCounter()
// let dounter = makeCounter()

// console.log( counter())
// console.log( dounter())
// console.log( counter())
// console.log( dounter())

// function f() {
//     let value = 123;

//     return function() {
//         alert(value);
//     }
// }

// let g = f();
// g = null;
// let arr = [f(), f(), f()]

// let value = 'lol'
// function f() {
//     let value = 'pick me';

//     return function g() {
//         debugger;
//     }
// }

// let a = f()
// a()

// function Counter() {
//     let count = 0;

//     this.up = function() {
//         return ++count;
//     }

//     this.down = function() {
//         return --count;
//     }
// }

// let counter = new Counter;

// console.log(counter)

// function sum(a) {
//     return function(b) {
//         return a + b
//     }
// }

// console.log(sum(4)(5))

// let x = 1;

// function func() {
//     let x = 3
//     console.log(x);
//     x = 2
// }

// console.log(x)
// func()
// console.log(x)

// function inBetween(a, b) {
//     return (item) => item >= a && item <= b
// }

// function inArray(arr) {
//     return (item) => arr.includes(item)
// }

// let arr = [1, 2, 3, 4, 5, 6, 7]

// console.log( arr.filter(inBetween(3, 6)))

// console.log( arr.filter(inArray([1, 2, 10])))

// function byField(str) {
//     return (a, b) => a[str] > b[str] ? 1 : -1
// }

// let David = { name: 'David', surname: 'Olufemi' , age: 20, id: 1}
// let Wale = { name: 'Wale', surname: 'Ola' , age: 22, id: 2}
// let Shade = { name: 'Shade', surname: 'Fola' , age: 18, id: 3}

// let users = [David, Wale, Shade];

// console.log(users.sort(byField('age'))[1]) //works!!

// console.log(byField.length)

// globalThis.aaa = 'new stuff'
// console.log(window)

// if (!window.Promise) {
//     console.log('your browser is too old')
// }


// function ask(question,...handlers) {
//     let isYes = confirm(question);

//     for (let handler of handlers) {
//         if (handler.length == 0) {
//             if (isYes) handler();
//         } else {
//             handler(isYes)
//         }
//     }
// }

// ask('Are you okay?', () => alert('You said yes'), result => alert(result))

// setTimeout(function func(a, b) {
//     console.log(`${a} ${b} sorry for delay`);
//     setTimeout(func, 2000, 'three', 'four')}, 2000, 'one', 'two')

// let start = Date.now()
// let time = [];

// setTimeout(function func() {
//     t = Date.now() - start
//     time.push(t)
//     if (Date.now() > start + 100 ) {
//         console.log( time)
//     } else setTimeout(func)
// })

// let sayHi = function func(who) {
//     console.log(func.name)
//     console.log(sayHi[].name)

// }
// sayHi()
// console.log(sayHi.name);

// let timerId = setTimeout("alert('yes')", 1000)

// clearTimeout(timerId)

// setInterval("console.log('yes')", 2000)

// function printNumbers(from, to) {
//     let num = from;
//     function func() {
//         if (num <= to) {
//             console.log(num++);
//             setTimeout(func, 1000)
//         }
//     }
//     setTimeout(func, 1000)
// }

// printNumbers(4, 10)

// function printNumbers(from, to) {
//     let num = from
//     function func() {
//         if ( num == to) {
//             clearInterval(timerId)
//         }
//         console.log(num++)
//     }
//     timerId = setInterval(func, 1000)
// }

// printNumbers(4, 12)

// function slow(x) {
//     alert(`Called with ${x}`);
//     return x;
// }

// SUPER AWESOMER SOLUTION
// function cachingDecorator(func) {
//     let cache = new Map();

//     return function(...x) {
//         let key = JSON.stringify(x.sort((a,b) => a - b)) // or x.join()
//         if(cache.has(key)) {
//             return cache.get(key);
//         }

//         let result = func.call(this, ...x); //or func.apple(this, x)

//         cache.set(key, result);
//         return result;
//     }
// }

// slow = cachingDecorator(slow);

// alert( slow(1) )
// alert('Again: ' + slow(1) )

// alert( slow(2) )
// alert('Again: ' + slow(2) )

// function say(phrase) {
//     alert(this.name + ': ' + phrase);
// }

// let user = { name: 'David'}

// say.call(user, 'Hello')


// let worker = {
//     someMethod() {
//         return 1;
//     },

//     slow(min, max, last) {
//         alert( `Called with ${min}, ${max} and ${last}`);
//         return min + max + last + this.someMethod()
//     }
// }


// worker.slow = cachingDecorator(worker.slow);

// console.log( worker.slow(2, 6, 4))
// console.log( worker.slow(2, 6, 8))
// console.log( `Again ${worker.slow(8, 2, 6)}`)
// console.log( `And again ${worker.slow(2, 6, 4)}`)

// Wrapper function
// let wrapper = function() {
//     return original.apply(this, arguments)
// }

// FUNCITON BINDING

let user = {
    firstname: 'David',
    sayHi() {
        alert(`Hello ${this.firstname}`)
    }
}

// setTimeout(() => {
//  user.sayHi()   
// }, 1000);

// let sayHi = user.sayHi.bind(user)
// function func() {
//     alert( this.firstname)
// }

// funcUser = func.bind(user)

// funcUser()

// setTimeout(sayHi, 1000);

// we can bind arguments too and fix context 'this' to null

