// function* generateSequence() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// let gen = generateSequence()
// console.log(gen)

// let one = gen.next()
// console.log(one)
// console.log(JSON.stringify(one))

// let two = gen.next()
// console.log(two)

// let three = gen.next()
// console.log(three)

// let four = gen.next()
// console.log(four)

// for(let value of gen) {
//     console.log(value)
// }

// let sequence = [0, ...gen]
// console.log(sequence)

// let range = {
//     from: 1, 
//     to: 5,

//     [Symbol.iterator]() {
//         return {
//             current: this.from,
//             last: this.to,

//             next() {
//                 if (this.current <= this.last) {
//                     return {done: false, value: this.current++}
//                 } else {
//                     return {done: true};
//                 }
//             }
//         }
//     }
// }

// console.log([...range])


// Redifing range for iteration
// let range = {
//     from: 1,
//     to: 5,

//     *[Symbol.iterator]() { // shorthand for [Symbol.iteraor]: function* ()
//         for(let value = this.from; value <= this.to; value++ ) {
//             yield value;
//         }
//     }
// }

// console.log([...range])

// GENERATOR COMPOSITION
// function* generateSequence (start, end) {
//     for (let i = start; i <= end; i++) yield i;
// }

// function* generatePasswordCodes() {

//     //0..9
//     yield* generateSequence(48, 57);

//     //A..Z
//     yield* generateSequence(65, 90);

//     //a..z
//     yield* generateSequence(97, 122);
// }

// let str = '';

// for (let code of generatePasswordCodes()) {
//     str += String.fromCharCode(code);
// }

// console.log(str);

// function* gen () {
//     // Pass a question to the outer code and wait for an answer
//     let result = yield "2 + 2 = ?";

//     console.log(result);
// };

// let generator = gen();

// let question = generator.next().value

// console.log(question)

// generator.next(4)

// function* gen() {
//     let ask1 = yield "2 + 2 = ?";

//     console.log( ask1)

//     let ask2 = yield "3 * 3 = ?"

//     console.log( ask2)
// }

// let generator = gen()

// console.log(generator.next().value);

// console.log(generator.next(4).value);

// console.log(generator.next(9).done)

function* pseudoRandom(num) {

    let result = num;
    while(true ) {
        result = result * 16807 % 2147483647

        yield result;
    }
}

let generator = pseudoRandom(1);

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

// for..of autoCalls next() to generator

// ASYNC ITERATION AND GENERATORS

// let range = {
//     from: 1,
//     to: 5,
//     [Symbol.iterator]() {
//         return {
//             current: this.from,
//             last: this.to,

//             next() {
//                 if(this.current <= this.last) {
//                     return {done: false, value: this.current++ }
//                 } else {
//                     return {done: true }
//                 }
//             }
            
//         }
//     }
// } 

// alert([...range])

let range = {
    from: 1,
    to: 5,
    *[Symbol.iterator]() {
        for (value = this.from; value <= this.to; value++){
            yield value
        }
    }
} 

alert([...range]) //Works!!!

