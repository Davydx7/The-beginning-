// try {
//     alert("start of try runs");
//     // do man things
//     // sjsj error!
//     alert("End of try runs")
// } catch(err) {
//     alert('This error is from catch')
// }

// try..catch works inside setTimeout not out of it
// try...catch executes at run time. not parse time
// it catches runtime errors known as exceptions

// try {
//     lalala; // error variable not defined
// } catch(err) {
//     console.log(err)
//     console.log(err.name)
//     console.log(err.message)
//     console.log(err.stack)
// }

// let server = {name:'David', age: 30}
// let json = JSON.stringify(server)
// console.log(json)
// json = '{ bad json}'

// try {
//     let user = JSON.parse(json)
//     console.log(user.name)
//     console.log(user.aged) // undefined , still doesnt execute catch

// } catch(e) {
//     alert('Sorry, problem with the data')
//     alert(e.name)
//     alert(e.message)

// }

// THROW
// throw <error object>
// error constructors

// let error = new Error(message)
// let error = new SyntaxError(message)
// let error = new ReferenceError(message) // .. and so on

// try {
//     user = JSON.parse(json)
//     if (!user.name) {
//         throw new SyntaxError("Incomplete data: no name");
//     }

//     alert ( user.named )
// } catch(e) {
//     alert(`JSON error:` + e)
// }

// let num = +prompt("Enter a positive integer number?", 35)

// let diff, result;

// function fib(n) {
//     if(n < 0 || Math.trunc(n) != n ) {
//         throw new Error("Must not be negative, and must be an integer")
//     }

//     return n <=1 ? n : fib(n - 1) + fib(n - 2); 
// }

// let start = Date.now()

// try {
//     result = fib(num)
// } catch(e) {
//     result = 0
//     console.log(e)
// } finally {
//     diff = Date.now() - start;
// }

// alert(result || 'error occured')
// alert(`execution took ${diff}ms`)

// CUSTOM ERROR, EXTENDING ERROR

// class ValidatonError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = this.constructor.name
//     }
// }

// function test() {
//     throw new ValidatonError('WHoopss!!')
// }

// try {
//     test()
// } catch(e) {
//     alert(e.message)
//     alert(e.name)
//     alert(e.stack)
// }

// class ReadError extends Error {
//     constructor(message, cause) {
//         super(message);
//         this.cause = cause;
//         this.name = this.constructor.name;
//     }
// }

// class ValidationError extends Error {}
// class PropertyRequiredError extends ValidationError {
//     constructor(property) {
//         super('No property: ' + property);
//         this.property = property;
//     }
// }

// function validateUser(user) {
//     if(!user.age) {
//         throw new PropertyRequiredError('age')
//     }

//     if(!user.name) {
//         throw new PropertyRequiredError('name')
//     }
// }

// function readUser(json) {
//     let user

//     try {
//         user = JSON.parse(json)
//     } catch (err) {
//         if(err instanceof SyntaxError) {
//             throw new ReadError('Syntax Error', err)
//         } else {
//             throw err;
//         }
//     }

//     try {
//         validateUser(user)
//     } catch (err) {
//         if (err instanceof ValidationError) {
//             throw new ReadError('Validation Error', err)
//         } else {
//             throw err;
//         }
//     }
// }

// try {
//     readUser('{bad json}');
// } catch (e) {
//     if (e instanceof ReadError) {
//         console.log(e);
//         console.log('Original error: ' + e.cause);
//     } else {
//         throw e; 
//     }
// }

// TASK


class FormatError extends SyntaxError {
    constructor(message) {
        super(message) 
        this.name = this.constructor.name
    }
}

let err = new FormatError("formatting error")

console.log(err.message);
console.log(err.name);
console.log(err.stack)