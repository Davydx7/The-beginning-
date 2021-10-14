// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// }

// rabbit.__proto__ = animal

// console.log(rabbit.eats)

// Animal as a method storage
// let animal = {
//     walk() {
//         if(!this.isSleeping) {
//             console.log('I can walk')
//         }
//     },

//     sleep() {
//         this.isSleeping = true
//     }
// }

// let rabbit = {
//     name: 'The Rabbit',
//     __proto__: animal
// }

// rabbit.sleep()

// console.log(rabbit.isSleeping) //true
// console.log(animal.isSleeping) //undefine lol, not there 

// Obj.hasOwnProperty(key) returns true if not inherited, else false

// console.log(rabbit.hasOwnProperty('hssh'))


// let test = new Object();

// console.log(test)


// F.prototype

// let animal = {
//     eats: true
// };

// function Rabbit(name) {
//     this.name = name;
// }

// Rabbit.prototype = animal; // or. __proto__ inside the constructor

// let rabb = new Rabbit('the rabbit');

// console.log(rabb.eats)

// Rabbit.prototype.eats

// function User(name) {
//     this.name = name
// }
// User.prototype = {}
// User.prototype.constructor = User

// let user = new User('john')
// let user2 = new user.constructor('Pete')

// console.log( user.name  )
// console.log( user2.name )

// let obj = {}
// let arr = []

// console.log( arr.__proto__.__proto__ === obj.__proto__ )

// String.prototype.show = function() {
//     console.log( this)
// }

// 'testing'.show()

// if (!String.prototype.repeat) {
//     String.prototype.repeat = function(n) {
//         return new Array(n + 1).join(this)
//     }
// }

// let a = 'las'.repeat(3)
// console.log(a)

//     0: 'Hello',
//     1: 'World',
//     length: 3,
// };

// obj.join = Array.prototype.join;

// console.log (obj.join(','))

// Function.prototype.defer = function(ms) {
//     setTimeout(this, ms)
    
// }

// function e(a, b) {
//     console.log(a + b)
// }

// e.defer(1000)


// Function.prototype.defer = function(ms) {
//     let f = this
//     return function(...args) {
//         setTimeout(() => f.apply(this, args), ms)
//     }
    
// }

// function e(a, b) {
//     console.log(a + b)
// }

// e.defer(1000)(1, 2)

// alert(Object.getPrototypeOf(e))

// let animal = {
//     eats: true
// }

// let rabbit = Object.create(animal)


// console.log(Object.getPrototypeOf(rabbit))

// Object.setPrototypeOf(rabbit, {})

// // SUPER CLONE

// let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptor(obj))

// let obj = {}

// let key = prompt('whats the key', '__proto__');
// obj[key] = 'some values'

// console.log(obj[key])

// let plain = Object.create(null);

// alert(plain)

// let dictionary = Object.create(null, {
//     toString: {
//         value() {
//             return Object.keys(this).join();
//         }
//     }
// })

// dictionary.apple = 'Apple';
// dictionary.__proto__ = 'Test';

// alert(dictionary)



