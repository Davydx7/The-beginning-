//Maps are basically objects where anything can be the key

// let mapy = new Map()

// mapy.set('1', 'str1')
// mapy.set(1, 'num1')
// mapy.set(true, 'bool1')

// mapy.has(1)//true
// mapy.delete(1) //deleted
// mapy.clear() //all gone

// console.log(mapy)

// console.log(mapy.get('1'))
// console.log(mapy.get(1))
// console.log(mapy.size)

// let David = { name: 'David', age: 20}

// let visitCountMap = new Map()

// visitCountMap.set(David, 'present')
// alert( visitCountMap.get(David))

//mapy.set(obj, value).set(num, value).set(str, value)  //Chainable

// let recipe = new Map([
//     ['cucumber', 500],
//     ['tomatoes', 350],
//     ['onion', 50]
// ])


// for (let vegetable of recipe.keys()) { //iterate of over keys
//     alert(vegetable)
// }

// for (let amount of recipe.values()) { //iterate of over values
//     alert(amount)
// }

// for (let entry of recipe) { //iterate of over entries
//         // recipe = recipe.entries,... its the default iterator
//     alert(entry) //returned as separate arrays
// }

// recipe.forEach( (value, key, map) =>
//     alert( `${key}: ${value}`)
// )

// let newMap = new Map( Object.entries(David))
// console.log(newMap)

// let recipee = Object.fromEntries(recipe)
// console.log(recipee)

// let objMapy = Object.fromEntries(mapy)
// console.log(objMapy)


// SET :)

// let set = new Set

// let David = { name: 'David', surname: 'Olufemi' , age: 20, id: 1}
// let Wale = { name: 'Wale', surname: 'Ola' , age: 22, id: 2}
// let Shade = { name: 'Shade', surname: 'Fola' , age: 18, id: 3}

// set.add(David).add(Wale).add(Shade)

// alert(set.size)
// console.log(set)

// for(let item of set) {
//     alert(item.name)
// }

// set.forEach((value, valueAgain, set) =>
//     console.log(value)
// )

// set.add(value)
// set.delete(value)
// set.clear()
// set.has(value)
// set.size

// function aclean(arr) { // cleans out anagrams
//     let map = new Map()

//     for (let word of arr) {
//         let sorted = word.toLowerCase().split('').sort().join('')
//         map.set(sorted, word)
//     }

//     return Array.from(map.values())

//     // OR
//     let obj = {}

//     for (let word of arr) {
//         let sorted = word.toLowerCase().split('').sort().join('')
//         obj[sorted] = word
//     }

//     return Object.values(obj)
// }

// let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares']

// alert( aclean(arr))

// let map = new Map();
// map.set('name', 'David')

// let keys = Array.from(map.keys())

// console.log(keys)

// keys.push('more')

// let john = {name: 'john'}
// let map = new WeakMap()
// map.set(john, 'something')

// console.log(john)
// john = null
// console.log(john)

// console.log(map)

// let messages = [
//     {text: 'Hello', from: 'John'},
//     {text: 'How goes?', from: 'John'},
//     {text: 'See you soon', from: 'Alice'}
// ]

// let readMessages = new WeakSet()

// readMessages.add(messages[0]) //read msg 1
// readMessages.add(messages[1]) // read msg 2
// readMessages.add(messages[0]) // read msg 1 again 

// let read = new WeakMap()

// alert('Read message 0: ' + readMessages.has(messages[0]))

// messages.shift()

// //or add a prop to messages
// // let isRead = Symbol('isRead')
// // messages[0][isRead] = true // now isRead isn't messing with messages

// let readMap = new WeakMap()

// readMap.set(messages[0], new Date(2020, 10, 03))

// let prices = {
//     banana: 1,
//     orange: 2,
//     meat: 4,
// }

// let doublePrices = {}
// for (let item in prices) {
//     doublePrices[item] = prices[item] * 2
// }

// let doublePrices = Object.fromEntries( 
//     Object.entries(prices).map( ([item, values]) => [item, values * 2])
// )

// console.log(doublePrices)

// function count(obj) {
//     return Object.keys(obj).length
// }

// console.log( count(prices))