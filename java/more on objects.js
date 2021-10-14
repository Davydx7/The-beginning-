//Optional chaining '?'
// let user = {}

// alert(user?.address?.street);
// if ...? is false, undefined is immediately returned and execution cuts

// let user1 = {
//     firstname: 'John',
//     admin() {
//         alert('I am admin')
//     }
// }

// user = null;
// // user1.admin?.() // ?.() is used to confirm if a function exist before executing
// // user.admin?.()

// let key = 'firstname'
// alert(user1?.[key])
// alert(user?.[key])

// user.name = 'john'

// alert(user.name)
// user = null
// delete user?.name

// let user = {
//     firstname: 'David',
//     lastname: 'Olufemi'
// };

// alert(user)

// let exm = Symbol('description name')

// let id = Symbol('id')
// user[id] = 1;
// // alert(user[id])

// alert( Object.keys(user) ) //symbols ignored
// alert( Reflect.ownKeys(user) )
// alert( Object.getOwnPropertyNames(user) )
// alert( Object.getOwnPropertySymbols(user) )

// let clone = Object.assign( {}, user )
// alert(clone[id]) //.assign clones symbols too!

// let idn = Symbol.for('id') // .for checks the global Symbol registry to copy same symbol, else create a new symbol with 'id'
// alert(Symbol.keyFor(idn)) // returns the key/id of a global symbol
// alert(idn.description) //returns the key for both local and global symbol

// makePrimitive/anotherObj[obj] = 'string' //making a object a property of another object store a string

// let n = +obj making an obj straight to a number

// let user = {
//     name: 'John',
//     money: 1000,

//     // for hint = "string"
//     toString() {
//         return `{name: '${this.name}'}`
//     },

//     // for hint = 'number' or 'default'
//     valueOf() {
//         return this.money;
//     }

    // [Symbol.toPrimitive](hint) {
    //     alert(`hint: ${hint}`);
    //     return hint == 'string' ? `{name: '${this.name}'}` : this.money;
    // }
// }

// alert(user);
// alert(+user);
// alert(user + 500);

