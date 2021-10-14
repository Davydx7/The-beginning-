// //methods are functions as properties of Objects
// let user = {
//     name: 'John'
// }

// function sayHi() {
//     alert('Hello!');
// }

// user.sayHi = sayHi;
// user.sayHi = function() {
//     alert('Changed')
// }

// user.sayHi= function() {
//         alert(this.name)
//     }


// alert(user.name)
// user.sayHi()

// let user = {
//     name: 'John',
//     age: 30,
//     sayHi() {
//         alert( this.name ) //this always assumes the object it is found, else is undefined
//     }
// }

// user.sayHi()
// let admin = user;
// user = null
// admin.sayHi()

// let user = {
//     firstName: 'Ilya',
//     sayHi() {
//         let arrow = () => alert(this.firstName);
//         arrow();
//     }
// }

// user.sayHi()`

// let calculator = {
//     read() {
//         this.a = +prompt('Enter the first value', '5');
//         this.b = +prompt('Enter the second value', '5');
//     },

//     sum() {
//         let result = this.a + this.b;
//         return result;
//     },

//     mul() {
//         return this.a * this.b;
//     }
// }

// calculator.read();
// alert( calculator.a )
// alert( calculator.b )

// alert( calculator.sum() );
// alert( calculator.mul() );

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep() {
//         alert( ladder.step);
//         return this;
//     }
// }

// ladder.up().up().down().showStep().up().up().showStep()

//CONSTRUCTOR OPERATOR NEW

// function User() {
//     this.name = 'John',
//     this.isAdmin = false
//     alert(new.target)
// }

// let user = new User();
// alert( user.name )
// alert( user.isAdmin)

// User();
// new User()

// function User(name) {
//     this.name = name;
//     this.sayHi = () => alert(`My name is ${this.name}`)
// }

// let user = new User('John')
// user.sayHi()

// function A() {
//     return obj
// }

// function B() {
//     return obj
// }

// let obj = {}

// let a = new A;
// let b = new B;

// alert( a == b );

// function Calculator() {
//     this.read = function() {
//         this.a = +prompt('first number?', '5');
//         this.b = +prompt('second number?', '');
//     }

//     this.sum = function() {
//         return this.a + this.b;
//     }
//     this.mul = function() {
//         return this.a * this.b;
//     }
// }

// let calculator = new Calculator();
// calculator.read()
// alert(`Sum = ${calculator.sum()}`)
// alert(`Mul = ${calculator.mul()}`)

// function Accumulator(startingValue) {
//     this.value = +startingValue;
//     this.read = function() {
//         let a = +prompt('enter another value to be added', '')
//         this.value += a;
//         return this;
//     }
// }

// let accumulator = new Accumulator(0);

// accumulator.read().read();
// alert( accumulator.value )

//all info stored as property in the object



//Amount Sharing code, to be optimized later :))
function Sharer() {

    this.collectInfo = function() {
        //collect names and respective scores based on amount of contestants
        alert('Time to collect all info needed')
        this.amount = +prompt('How much is to be shared?', '0');
        this.contestants = +prompt('How many constestants are there?', 0);
        for (let i = 1; i <= this.contestants; i++) {
            this['name' + i] = prompt(`Name of contestant ${i}`, '');
            this['score' + i] = +prompt(`Score of contestant ${i}`, '');
        }
        alert('Thanks for supplying all necessary info!')
    }

    this.share = function() {
        alert('Please hold, the algorithm is sharing accordingly...')
        
        let total = 0;
        for (let i = 1; i <= this.contestants; i++) {
            total += this['score' + i];
        }

        alert(`Total is ${total}`)

        for (let i = 1; i <= this.contestants; i++) {
            this['share' + i] = Math.round((this['score' + i]/total) * this.amount)
        }

        alert('The results will be displayed now!')
    }

    this.showResult = function() {
        for (let i = 1; i <= this.contestants; i++) {
            alert( `${this['name' + i]}'s share is ${this['share' + i]}` )
        }
        
        alert('Thanks for using this application')
    }
}

indomieContest = new Sharer();
indomieContest.collectInfo();
indomieContest.share();
indomieContest.showResult();