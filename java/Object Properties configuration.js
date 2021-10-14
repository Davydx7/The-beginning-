'use strict'

// let user = {
//     name: 'John',
//     toString() {
//         return this.name2
//     },
//     age: 21
// }

//  Object.getOwnPropertyDescriptor()

// let prop = Object.getOwnPropertyDescriptor(user, 'name')

// console.log(prop);

// Object.defineProperty(user, 'name', {
//     writable: false
// })

// user.name = 'David'

// console.log(user.name)

// way to set property flags from creation
// Object.defineProperty(user, 'name2', {
//     value: 'David',
//     enumerable: true,
//     configurable: true
// })

// console.log(user.name2)

// for (let key in user) console.log(key)

// let d = Object.getOwnPropertyDescriptor(Math, 'PI')

// console.log(d)

// Math.PI = 3 //impossible

// Object.defineProperties(user, {
//     name: {value: 'Dave', writable: false},
//     age: {value: 22, enumerable: false}
// })

// console.log(JSON.stringify(Object.getOwnPropertyDescriptors(user), null, 2))

// way to entirely clone an array
// let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user));

//  GETTERS AND SETTERS

// let uses = {
//     name: 'David',
//     surname: 'Olufemi',

//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     },

//     set fullName(value) {
//         [this.name, this.surname] = value.split(' ')
//     }
// }

// alert(uses.fullName)

// uses.fullName = 'testing microphone jack' // doesn't work... yet

// console.log(uses.surname)

// get and set replaces value and writable 
// accessor property to data property of objects
// get and set can perform cool tricks as set coming in during
// assigning a value to store the value into a this.exm and get 
// getting it from there


// function User (name, age) {
//     this.name = name;
//     this.age = age;
// }

// let David = new User('David', 21);

// alert(David.age);
// console.log(David)



