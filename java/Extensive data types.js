 'use strict'
//primitives as objects, temporal object shells are created around primitives
// let str = 'Hello';
// alert(str.toUpperCase())
// alert( 123.456.toFixed(1) )
// str.test = 5
// alert( str.test );

//NUMBERS
//let billion = 1000000000;
// let billion = 1e9;
// alert(7.3e9)
// let ms = 1e-6;
// alert( 0xFf)

// alert(999999999..toString(36)) // first . to signal end of number
// the num.toString is used to conver to a number base, returns a string though

//ROUNDING
// Math.floor(num) // returns the lower integer bound
// Math.ceil(num) // returns the higher integer bound
// Math.round(num) // the normal rounding that i know
// alert( Math.round(2.5)) //3
// Math.trunc(num) // truncates, cuts off triailing decimals

// num.toFixed(n) // n stands for 'what decimal place', useful for rounding to a specifinc d.p

// alert(NaN === NaN) // false :D

// alert( isFinite('')) //converts to 0 and thus, finite isNaN analogouss
// alert( 1e308 ) //maximum finite, after which pricision returns infinity

// let num = 0.1 + 0.2;
// alert(+num.toFixed(4)) // the '+' forces it into a number standard

// alert( isNaN(''))


// alert( NaN === NaN ) //false
// alert( Object.is(NaN, NaN)) // true
// Object.is is the best comparism

// let mixedNum = '045.09.8$'
// alert( parseInt(mixedNum) + ' ' + parseFloat(mixedNum) )
// parseInt('string to be read from', the base the read is in at the moment)

// There are a lot of built in objects like Math.prop
// Math.random()
// Math.max(1,5,3,5,3,756,23,) or Math.min(...,...,)
// Math.pow(n, power)

// let a = +prompt('Enter first number to be added');
// let b = +prompt('Enter second number to be added');
// let c = a + b
// alert( c )

// Tip: bring decimal fractions closer to intergers by multiplying
// with multiples of 10, then round, then divide by the same 
// multiple of 10, this reduces precision errors

// function readNumber() {
//     // a = prompt('Enter a number');
//     // if(isNaN(a) ) {
//     //    return readNumber();
//     // }                            // OR

//     // let a;
//     // do {
//     //     a = prompt('Enter a number');
//     // } while( isNaN(a) )          // OR

//     // while(true) {
//     //     a = prompt('Enter a Number')
//     //     if ( isFinite(a) ) break;
//     // }                            // NO NEED TO DECLARE IN A WHILE LOOP if 'use' strict is off

//     if( a === null || a === '') return null;

//     return +a
// }

// alert( readNumber())

// function random(min, max) {
//     return (Math.random() * (max - min)) + min
//     // returns  a float  
// } 

// alert( random(1, 5) )

// function irandom(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min
//     // returns  a float  
// } 

// alert( irandom(1, 5) )

// let guestList = `Guestss:
//  John,
//  Pete,
//  Mary.`
 // \n is line break inside a string
// alert(guestList)

// STRINGS

// alert( '\u00A9' + '\u{1F60D}' ) // copyright + smile face symbol

// alert('\\')

// alert( `My\n`.length )

// let str = 'javaScript'

// str[2] = 'j' // string characters are read only!!!
// alert ( str.charAt(0)) // returns '' if character is not existent
// alert (str[2] ); // returns undefined if character is not existent

// alert ( str[str.length - 1])

// for (let l of str ) { // for..of to iterate over a string
//     alert (l)
// }

// though individual character of a string can be accessed, they
// can't be modified

// alert( str.toUpperCase() ) //only makes uppercase for the instant
// alert (str[3].toLowerCase()) // this modifications are only instant, they do not change th object
// alert(str) 

// alert( str.indexOf('Script', 2) )

// function checkSpam(str) {
//     let lowerCase = str.toLowerCase();
//     return lowerCase.includes('xxx') || lowerCase.includes('viagra')
// }

// alert( checkSpam('frexXx'))

// function truncate(str, maxLength) {
//     return (str.length <= maxLength) ? str : 
//     str.slice(0, maxLength - 1) + '\u2026'
// }

// alert( truncate('Hello!', 5) ) // \u2026 = ...

// let func = () => 2+2 // no need for {}
// alert( func )

// let obj = new Object () // constructor 
// // object here is an in-built constructor funtion, takes no argument
// // obj = {} //object literal, and you can pack stuffs inside already
// alert( obj )
// alert( obj.name)

// let arr = []
// alert( arr )



