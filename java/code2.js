'use strict';
/*let i= 10
while(i){ // i here means i!= 0
    alert(` ${i} * 4 = ${i*4}`)
    i--
} */

/*let j = 5;
do{
    alert(j/2);
    j++;
} while(j<=10);
*/
/*let i = 0;
//for (let i = 0; i<3; i++){
 //   alert(i)
//}
//for(begin; condition; step) any part of this can be ommitted
for (;i<3;){
    alert(++i) //++i adds to i before alerting, i++ adds to i after alerting
}
*/
/*
let sum=0
while(1){
    value= +prompt('Enter a number to be added')
    if(!value) break
    sum += value;
}
alert('Sum: ' + sum)
*/
/*
for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) continue;//continue stops the current iteration and continues with the next number
    alert(i)
}
*/
/*
outer: for(let x= 4; x<6; x++){
    for(let y = 8; y<10; y++){
        let value = +prompt('Enter value at ' + x +','+ y )
        if(!value) break outer //outer here is a label to reference where to break or continue
    }
}
alert('Done!')
*/
//Even Numbers
/*while (true) {
    Num = +prompt('Please enter a number', '')
    if (Num > 100) {
        alert('welldone, you figured it out')
        break
    } else if (Num === null || Num === '') {
        alert('so you are not interested')
        break
    } else {
        alert('Try again! :))')
    }
}
*/
//PRIME NUMBERS
/*
let n= +prompt('Where should the algorithm stop searching for prime numbers?','')
search: for(let i=2;i<=n;i++){
    for(let d=2; d<i; d++){
        if (i%d == 0) continue search
    }
    alert(i) //this code was a success on first attempt :)
}
*/
//SWITCH type must be strictly the same, works with ===, '2' != 2
/*
let a = +prompt('Enter a number to be spelt');
switch(a){
    case 1: 
        alert(a +' is one') 
        break;
    case 2: 
        alert(a +' is two')
        break;
    case 3: 
        alert(a +' is three')
        break;
    case 4: 
        alert(a +' is four')
        break;
    case 5: 
        alert(a +' is five')
        break;
    default: 
        alert('i can`t read ' + a)
}
*/
//Task
/*
let browser = prompt('Which browser are you using?')
if (browser == 'Edge') {
    alert("You've got the Edge!");
} else if (browser == 'Chrome' || browser== 'Firefox' || browser=='Safari' || browser=='Opera') {
    alert('Okay we support this brower too')
}   else {
    alert('We hope that this page looks ok!')
}

let a = +prompt('a?','');
switch(a){
    case 0: alert(0)
    break
    case 1: alert(1)
    break
    case 2:
    case 3: alert('2,3')
    break;
} */