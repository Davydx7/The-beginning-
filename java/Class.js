// class MyClass {
//     //class methods
//     constructor() {}
//     method1() {}
//     method2() {}
//     ...
// }

// class User {
//     constructor(name) {
//         this.name = name
//     }

//     sayHi() {
//         console.log(this.name)
//     }

//     get name() {
//         return this.kname
//     }

//     set name(value) {
//         if (value.length < 4) {
//             console.log('Name is too short.');
//             return
//         }
//         this.kname = value;
//     }

//     ['say' + 'Cream']() {
//         alert('iceCream')
//     }

//     age = 30
// };

// let someone = new User('David')

// console.log(someone.name)

// User = new User('abi')

// let user = new User('John')
// user.sayHi()

// console.log(typeof  User)

// console.log(User.prototype.constructor === User)
// console.log(Object.getOwnPropertyNames(User.prototype))
// console.log(User)

// let Oau = class civil {
//     sayHi() {console.log(civil)}
// }

// new Oau().sayHi()
// console.log(Oau)
// console.log(civil)

// function makeClass(phrase) {
//     return class {
//         sayHii() {
//             alert(phrase)
//         }
//     }
// };

// let me = makeClass('David');

// new me().sayHii()

// someone.sayCream()

// console.log( someone.age )

// class Button {
//     constructor(value) {
//         this.value = value;
//     }

//     click = () => {  // field, the value of this will be rightly evaluated
//         console.log(this.value)
//     }
// }

// let button = new Button('hello');

// setTimeout(() => {
//     button.click()
// }, 1000);

// class Clock {
//     constructor( {template}) {
//         this.template = template;
//     }

//     render = () => {
//         let date = new Date();

//         let hour = date.getHours()
//         if (hour < 10) hour = '0' + hour;

//         let min = date.getMinutes()
//         if ( min < 10) min = '0' + min;

//         let sec = date.getSeconds()
//         if (sec < 10) sec = '0' + sec;

//         let output = this.template
//             .replace('h', hour)
//             .replace('m', min)
//             .replace('s', sec)
        
//         console.log(output)
//     }

//     stop() {
//         clearInterval(this.timer)
//     }

//     start() {
//         this.render();
//         this.timer = setInterval(this.render, 1000);
//     }
// }

// let clock = new Clock( {template: 'h:m:s'})
// clock.start()

// INHERITANCE

// class Animal {
//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//     }
    
//     run(speed) {
//         this.speed = speed;
//         alert( `${this.name} runs at a speed of ${this.speed}m/s.`)
//     }

//     stop() {
//         this.speed = 0;
//         alert(`${this.name} stands still.`)
//     }
// }

// let animal = new Animal('My cat');

// // console.log(animal.speed)

// class Rabbit extends Animal {
//     constructor(name, earLength) {
//         super(name)
//         this.earLength = earLength;
//     }

//     hide() {
//         alert(`${this.name} hides!`)
//     }

//     stop() {
//         setTimeout(() => super.stop(), 1000); // arrow function awesome
//         setTimeout(() => this.hide(), 3000)
//     }

//     static governsOverAll() {
//         // A Static method
//         // this = article

//         // here is a method of the whole class, not of any article created from the class
//     }

//     static propertyish = '// whatever statics are inherited too';
// }

// let rabbit = new Rabbit('White Rabbit', 10);

// // rabbit.run(5)
// // rabbit.hide()
// rabbit.stop()

// console.log(rabbit.earLength)



// function f(name) {
//     return class You {
//         sayName() { alert( name )}
//     }
// }

// class User extends f('David') {}

// new User().sayName()


// PRIVATE AND PROTECTED PROPERTIES AND METHODS

// class CoffeMachine {
//     _waterAmount = 0; 

//     set waterAmount(value) {
//         if (value < 0) throw new Error('Negative water')
//         this._waterAmount = value;
//     }

//     get waterAmount() {
//         return this._waterAmount;
//     }

//     constructor(power) {
//         this.power = power;
//         alert(`Created a coffee-machine, power: ${power}` );
//     }
// }

// class CoffeMachine {
//     #waterAmount = 0; 

//     set waterAmount(value) {
//         if (value < 0) throw new Error('Negative water')
//         this.#waterAmount = value;
//     }

//     get waterAmount() {
//         return this.#waterAmount;
//     }

//     constructor(power) {
//         this.power = power;
//         alert(`Created a coffee-machine, power: ${this[power]}`);
//     }
// }

// // create the coffee machine
// let coffeeMachine = new CoffeMachine(100);

// // add water
// coffeeMachine.waterAmount = -10 ;

//  EXTENDING BUILT-IN CLASSES

// class PowerArray extends Array {
//     isEmpty() {
//         return this.length === 0;
//     }

//     static get [Symbol.species]() { // To override species i.e type
//         return Array;
//     }
//     static [Symbol.hasInstance](obj) {
//         // customize the behaviour of 'instanceOf'
//     }
// }

// let arr = new PowerArray(1, 2, 5, 10, 50);
// console.log(arr.isEmpty())

// let filteredArr = arr.filter(item => item >= 10 )
// console.log(filteredArr)
// console.log(filteredArr.isEmpty())

// class Rabbit {}
// let rabbit = new Rabbit();

// console.log( rabbit instanceof Rabbit)

// class Animal {
//     static [Symbol.hasInstance](obj) {
//         if (obj.canEat) return true;
//     }
// }

// let obj = {canEat: true}

// console.log(obj instanceof Animal)

// let user = {
//     [Symbol.toStringTag]: 'stringy'
// }

// console.log({}.toString.call(user)) // typeof on steroids

// console.log({}.toString.call(123)) // [object Number]

// MIXINS

// let sayMixin = {
//     say( phrase) {
//         console.log( phrase)
//     }
// }

// let sayHiMixin = {
//     __proto__: sayMixin,
//     sayHi() {
//         super.say(`Hello ${this.name}!`)
//     },
//     sayBye() {
//         super.say(`Bye ${this.name}!`)
//     }
// }

// class User {
//     constructor(name) {
//         this.name = name;
//     }
// }

// Object.assign(User.prototype, sayHiMixin);

// new User('Dude').sayHi()

let eventMixin = {

    // subscribe to event, usage:
    // menu.on('select', function(item){...})
    on (eventName, handler) {
        if (!this._eventHandlers) this._eventHandlers = {}
        if (!this._eventHandlers[eventName]) {
            this._eventHandlers[eventName] = [];
        }
        this._eventHandlers[eventName].push(handler)
    },

    // Cancel the subscription, usage:
    // menu.off('select', handler)
    off (eventName, handler) {
        let handlers = this._eventHandlers?.[eventName];
        if(!handlers) return;
        for (let i = 0; i < handlers.legnth; i++) {
            if (handlers[i] === handler) {
                handlers.splice(i--, 1 );
            }
        }
    },

    trigger(eventName, ...args) {
        if (!this._eventHandlers?.[eventName]) {
            return //no handlers
        }

        this._eventHandlers[eventName].forEach((handler) => handler.apply(this, args));
    }
}

// USAGE

class Menu { //make a class
    choose(value) {
        this.trigger('select', value)
    }
}

Object.assign(Menu.prototype, eventMixin);

let menu = new Menu()

// add a handler, to be called on selection
menu.on("select", value => console.log(`Value selected: ${value}`))
menu.on("select", value => console.log(`Value selected: ${value + 0}`))

// menu.on(eventName, handler), to push more handlers into the array to be
// activated once this.trigger is called
menu.choose("123")
