// function loadScript(src) {
//     //creates a <script> tag and append it to the page
//     //this causes the script with the given src to start loading and run when complete
//     let script = document.createElement('script');
//     script.src = src;
//     document.head.append(script)
// }

// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;

//     script.onload = () => callback(script)
//     document.head.append(script)
// }

// function loadScript(src, callback) {
//     let script = document.createElement('script')
//     script.src = src;
//     script.onload = () => callback(script);
//     script.onerror = () => callback(new Error(`script load error for ${src}`))
//     document.head.append(script)
// }

// loadScript('https://uniwar.github.io/web/', script => {
//     alert(`cool, the script ${script.src} is loaded`);
//     alert(_)
// });

// let prom = new Promise((resolve, reject) => {
//     // resolve("our value");
//     reject(new Error('fail o')) //ignored
// })

// //promise takes either one, just one

// prom.then(
//     result => alert(result),
//     err => alert(err)
// )

// prom.catch(
//     //error handling function
// )

// prom.then(
//     null, 
//     //error handling funciton
// )

// prom.finally(
//     //just do this function no matter what
// )

function loadscript(src) {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script')
        script.src = src;

        script.onload = () => resolve(script)
        script.onerror = () => reject(new Error(`Script load error on ${src}`))

        document.head.append(script)
    })
}

// let promi = loadscript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

// promi.then(
//     scrpt => alert(`${scrpt.src} is loaded`),
//     error => alert(`Error: ${error.message}`)
// )

// promi.then(script => alert('Another handler...'))

//Promises chaining

// new Promise(function(resolve, reject) {
//     setTimeout(()=> resolve(1), 1000)
// }).then(function(result) {
//     console.log(result); //1
//     return result * 2;
// }).then(function(result) {
//     console.log(result); //2
//     return result * 2
// }).then(function(result) {
//     console.log(result) //4
//     return result * 2
// })

// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(1), 1000);

// }).then(function(result) {
//     console.log(result); // 1
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => resolve(result * 2), 2000)
//     })

// }).then(function(result) {
//     console.log(result); // 2

//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(resultx * 2), 1000);
//     });

// }).then(function(result) {
//     console.log(result); // 4
// })

// loadscript("/java/Map and set.js")
//     .then(function(script) {
//         return loadscript("/java/Method.js");
//     })
    
//     .then(function(anotherScript) {
//         return loadscript("/java/more on objects.js")
//     })

//     .then(function(moreScript) {
//         //actually loaded script are loaded
//         //and available down the line
//         //functions from the scripts can be used here
//         one();
//         two();
//         three();
//     });

// class Thenable {
//     constructor(num) {
//         this.num = num;
//     }
//     then(resolve, reject) {
//         alert(resolve); // function() {native code}
//         // resolve with this.num*2 after 1 second
//         setTimeout(() => resolve(this.num*2), 1000)
//     }
// }

// new Promise(resolve => resolve(1))
//     .then(result => {
//         return new Thenable(result)
//     })
//     .then(alert)

// fetch('/java/Advanced function.js')
//     //.then runs when the remote server responds
//     .then(function(response) {
//         // response.text() retunrs a new promise
//         // that resolves with the full response text
//         // when it loads
//         return response.text()
//     })
//     .then(function(text) {
//         // ...and here is the content of the 
//         // remote file
//         alert(text);
//     })

// //Better still
// fetch('/java/Advanced function.js')
//     .then(response => response.json())
//     .then(user => alert( user.name ))

// loadscript('/java/user.json')
//     // .then below run when the remote server responds
//     .then(function(response) {
//         //response.text() returns a new promise
//         // that resolves with the full response text when it loads
//         return response.text();
//     })
//     .then(function(text) {
//         // ...and here's the content of the remote file
//         alert(text)
//     })

//ASYNC AWAIT

// async function loadJson(src) {
//     let response = await new Promise(resolve => resolve(src))

//     // console.log( typeof response)
//     // console.log(response)
//     //let user = await response.json();
//     let user = JSON.parse(response)

//     alert(user.user.name)

//     return user
// }

function loadJson(src) {
    return new Promise(resolve =>{
    let response = JSON.parse(src)
    //console.log(response)
    resolve(response.user.name)
    })
}

loadJson(`{
    "user": {
        "name": "David",
        "Age": 21,
        "Gender": "male",
        "use": {
          "nam": "jade"
        }
    }
}`).then(alert)