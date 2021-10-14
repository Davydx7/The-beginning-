//let user = new Object() //object constructor syntax
//let user = {} //object literal syntax
/*
const user = {
    name: 'John',
    age: 30  
    //name or identifier: value
}
let named = 'name'
alert(user.name);
user['Admin'] = true;
user['like birds'] = true;
alert(user['like birds'])
delete user['like birds']
alert(user[named])
let key = prompt('what do you know', 'age');
alert( user[key])
*/
/*
let brand = prompt('what brand is your footwear?', 'Nike');
let size = prompt('what is your shoe size?', '42');
let shoe = {
    brand, //same as brand: brand <= writable value
    size, //same as size: size <= writable value
}
//alert(shoe.brand + ' ' + shoe.size)
//alert( 'brand' in shoe)

for (let prop in shoe) {
    alert(prop + ': ' + shoe[prop] )
}
*/
/*
let codes = {
    '+41': 'hahaha', //adding + to make the numbers noninteger
    '+65': 'jajaja',
    '+34': 'ksoskd',
}
for (code in codes) {
    alert(+code)
}
*/

// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;

// function isEmpty(obj) {
//     for(let prop in obj) {
//         return false;
//     }
//     return true;
// }

// let schedule = {};
// alert( isEmpty(schedule) )
// schedule['8:30'] = 'get up';
// alert( isEmpty(schedule) );

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// let sum = 0;
// for (let prop in salaries) {
//     sum += salaries[prop];
// }
// alert(sum)

// function multiplyNumeric(obj) {
//     for(let prop in obj) {
//         if (typeof(obj[prop]) == 'number' ) {
//         obj[prop] *= 2; 
//         }
//     }
// }

// let menu = {
//     width: 200,
//     height: 300,
//     title: 'My menu'
// }

// alert(menu.width)
// alert(menu.title)

// multiplyNumeric(menu);

// alert(menu.width)
// alert(menu.title)

//  let user = {
//      name: 'John',
//      age: 30,
//  }

// let clone = {} // just use let clone = Object.assign({}, user)
// for(let prop in user) {
//     clone[prop] = user[prop]
// } 
// clone.name = 'pete'
// alert( clone.name )
// alert(user.name)

// let clone = Object.assign({}, user) //a shorter concise way
// alert(clone.age)