'use strict'
//DESTRUCTURING ASSIGNMENTS
// let [firstname, lastname] = 'David Olufemi'.split(' ')

// console.log(firstname) 

// let [a, b, c, d = true] = new Set([1, 2, 3, 'j'])
// console.log(d);

// let user = {};
// [user.name, , user.surname] = 'David B Olufemi'.split(' ')
// console.log(user.surname)

// for (let [name, tname] of Object.entries(user)) {
//     alert( `${name}: ${tname}`)
// }

// [a, b] = [b, a]

// alert(b)

// let box = {
//     height: 100,
//     width: 200,
//     length: 500,
// };

// let {clay = 2, height: h = 8, stay = prompt('stay?')} = box

// console.log(h)
// console.log( clay )
// console.log(stay)

// let {height, ...rest } = box

// console.log(rest.width)

// NESTED DESTRUCTURING
// let options = {
//     size: {
//         width: 100,
//         height: 200
//     },
//     items: ['Cake', 'Donut'],
//     extra: true
// }

// let {
//     size: {
//         width,
//         height
//     },
//     items: [item1, item2],
//     title = 'menu'
// } = options

// console.log(item1)

// let options = {
//     title: 'Titanic',
//     items: ['mango', 'item2']
// }

// function showMenu({
//     title = 'untitled', 
//     width: w = 200, 
//     height = 100, 
//     items: [item1, item2]
// }) {
//     console.log(`${w} ${title} ${item1} `)
// }

// showMenu(options)

// let user = {
//     name: 'David',
//     year: 21
// };

// let {name, year: age, isAdmin = false } = user

// console.log(name)
// console.log(age)
// console.log(isAdmin)

// let salaries = {
//     David: 2000,
//     Bade: 1500,
//     Titi: 1750
// }

// function topSalary(sal = {}) {

//     let [maxName, maxSalary] = [null, 0]

//     for (let [name, salary] of Object.entries(sal)) {
//         if(salary > maxSalary) {
//             [maxName, maxSalary] = [name, salary]
//         }
//     }

//     return maxName;
// }

// console.log(topSalary())


// DATE!!!

// let now = new Date(0)
// let later = new Date(24 * 60 * 60 * 1000)

// console.log(now);
// console.log(later)

// let date = new Date( '2017-01-26')
// console.log(date)

// let date = new Date(2020, 9, 4, 18, 36, 57, 785)
// date.setDate(30)
// alert( date )

// date.setFullYear(date.getFullYear() + 2)
// alert( date )
// let date = new Date()

// alert( +date)

// let start = Date.now(); // new DAte().getTime()

// for (let i = 0; i < 1000000; i++) {
//     let doSomething = i ** (i ** (i ** i))
// }

// let end = Date.now(); // new Date().getTime()

// alert( `The loop took ${end - start} ms`)

// function diffSubtract(date1, date2) {
//     return date1 - date2;
// } 

// function diffGetTime(date1, date2) {
//     return date1.getTime() - date2.getTime();
// }

// function bench(f) {
//     let date1 = new Date(0)
//     let date2 = new Date()

//     let start = Date.now();
//     for (let i = 0; i < 100000; i++) f(date1, date2);

//     return Date.now() - start
// }

// let time1 = 0
// let time2 = 0;

// bench(diffGetTime);
// bench(diffGetTime)

// for (let i = 0; i < 10; i++) {
//     time1 += bench(diffSubtract);
//     time2 += bench(diffGetTime)
// }

// console.log( `Time of diffSubstract is ${time1}ms`)
// console.log( `Time of diffGetTime is ${time2}ms`)

// let ms = Date.parse('2020-10-05T08:50:46.986-07:00')
//         //('YYYY-MM-DDTHH:mm:ss.sssZ')
// console.log(ms)
// console.log(new Date(ms)

// alert(performance.now)

// let date = new Date('2012-02-20T03:12:00')
// let datee = new Date(2012, 1, 20, 3, 12)
// // alert(date);

// function getWeekDay(date) {
//     return ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'][date.getDay()]
// }

// alert(getWeekDay(date))

// function getDateAgo(date, days) {
//     let copy = new Date(date)
//     copy.setDate(date.getDate() - days)
//     return copy.getDate()
// }

// let date = new Date (2019, 10, 23)

// alert( getDateAgo(date, 365))

// function timeStamp(date) {
//     let now = new Date();
//     let secDiff = Math.floor((now - date) / 1000);
//     let minDiff = Math.floor(secDiff / 60)
//     let hourDiff = Math.floor(minDiff / 60);

//     if (secDiff < 1) {
//         return 'right now'
//     } else if (minDiff < 1) {
//         return `${secDiff} sec. ago`
//     } else if (hourDiff < 1) {
//         return `${minDiff} min. ago`
//     }

    // let year = date.getFullYear().toString().slice(-2)
    // let month = date.getMonth() + 1
    //     month = month < 10 ? '0' + month : month
    // let day = date.getDate() 
    //     day = day < 10 ? '0' + day : day
    // let hour = date.getHours()
    //     hour = hour < 10 ? '0' + hour : hour
    // let min = date.getMinutes()
    //     min = min < 10 ? '0' + min : min

    // return `${day}.${month}.${year} ${hour}:${min}`


    // OR
//         let d = date; //working with duplicate
//     d = [ 
//         '0' + d.getDate(),
//         '0' + (d.getMonth() + 1),
//         '' + d.getFullYear(),
//         '0' + d.getHours(),
//         '0' + d.getMinutes()
//     ].map(component => component.slice(-2)) // take last two digits

//     return `${d.slice(0, 3).join('.')} ${d.slice(3).join(':')}`

// }

// console.log(timeStamp(new Date(new Date() - 567)))
// console.log(timeStamp(new Date(new Date() - 4 * 1000)))
// console.log(timeStamp(new Date(new Date() - 3 * 60 * 1000)))
// console.log(timeStamp(new Date(new Date() - 7 * 3600 * 1000)))

// JSON

// console.log( JSON.stringify(1))
// console.log( JSON.stringify(true))
// console.log( JSON.stringify('yes'))
// console.log( typeof JSON.stringify(['stay', 'clay']))
// console.log( JSON.stringify({boy: 2, car: ['hey', {day: 3, month: 5}]}))

let room = {
    number: 23,
    // toJSON() {
    //     return this.number;
    // }
};

let user = {
    name: "David",
    Age: 21,
    Gender: 'male',
    use: {
        nam: 'jade'
    }
}

// let meetup = {
//     title: 'Conference',
//     participants: [{name: 'john'}, {name:'ann'}],
//     date: new Date(2017, 0, 4),
//     place: room
// };

// room.occupiedBy = meetup
// console.log(JSON.stringify(meetup,['title', 'participants', 'place', 'name', 'number']))

// console.log(JSON.stringify(meetup, (key, value) => {
//     // alert(`${key}: ${value}`);
//     return (key == 'occupiedBy') ? undefined : value;
// }, 2))

// toJSON : our own custom made JSON string

let json = JSON.stringify(user,null,2)
console.log(json)
console.log(JSON.parse(json))

// let test = '{"title":"Conference","date":"2017-11-30T12:00:45.736Z"}'
// let parsed = JSON.parse(test, (key, value) =>
//     (key == 'date') ? new Date(value) : value)

// console.log(parsed)

// console.log(parsed.date.getFullYear())

// JSON.stringify(value, replacer(), space)
// JSON.parse(value, reviver())