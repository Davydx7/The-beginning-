'use strict';
//let userName=prompt('Welcome!, What is your name?');
/*alert(`Welcome, ${userName}!`)
prompt('kslf','default') // takes all valuse including numbers as strings
confirm('Are you sure you want to submit?')
alert(3+7); */
/*alert(2+3) // 5
alert('2'+3) // 23
alert(2+'3') // 23
alert(+'2'+ +'3') // 23
alert('james' + 'jake') // jamesjake
alert(+'james' + +'jake') // NaN
BigInt = when number is greater than 2**53 -1, put n at the end of the number (e.g 359n)
// plus (+) converts to Number type, !! converts to Boolean type
alert('6'/'2') 
*/
/*let n = 2
n += 5
alert(n) // 7
n*=5
alert(n) // 35
n*= 1+3
alert(n) // 140
n++
alert(n) //141
n--
alert(n) // 140
let counter = 0
++counter //counter already increased
counter++ //counter will be increased on next call
//alert(++counter)
/** COMPARISONS
AND &
OR |
NOT ~
LEFT SHIFT <<
RIGHT SHIFT >>
ZERO-FILL RIGHT SHIFT >>>
*/
/*for(a=2, b=3, c=a*b; a<10; a++) {
    alert(a)
}
*/
/*alert(1>3) // false
alert(1==1) // true
alert(3 != 3) // false
*/
// Comparisons converts boolean to numbers, 
// Also alphabets can be compared
/*
//two values can be equal but at the same time be true and the other false as boolean
let a = 0, b = '0'
alert( `a is ${Boolean(a)} b is ${Boolean(b)}`) //a is false b is true
alert( ` a==b is ${a==b} but a===b is ${a===b}`)
*/
/*
let year = prompt('in which year was i born?', 'just guess')
if(year<1999) {
    alert('i am not that old')
}
    else if(year>1999) { alert('I am not that young!')
}   else{alert('You are correct!')}
*/
/*let age = prompt('how old are you?',)
let accessStatus = age>=18 ? 'You are old enough, proceed!' : 'Sorry, you are too young!';
alert(accessStatus);
*/
//USING CONDITIONAL OPERATOR '?'
/*let workExp = prompt('How many work of experience do you have?', 10);
let message = (workExp < 5) ? 'Not enough experience!' :
(workExp < 20) ? 'You have moderate experience' : 'You are well experienced!'
alert(message)
if(workExp < 5) {
    alert('Not enough experience')
}   else if(workExp < 20) {
    alert('You have moderate experience')
}   else {
    alert('You are well experienced!')
}
*/
/*let a=3==7, b=5<3, c= 17>9, Name='Davyd'
alert(a || b || c || Name)//returns true for c, Davyd if a b c are not true
if (a || c) alert('good, one is true')
    else alert('non is true')*/
// or (||) returns the first Truth statement, while and (&&) returns the first False statement
//alert(1 && 'john' && '' && 0 && 7)
//alert('john' || '' || 0 || 7)
//alert(null || 2 &&3||4)//3, and(&&) precedes or (||)
/*
let Num = prompt('enter a number', "**")
if(Num >= 14 && Num <=90) {
    alert(`${Num} is between 14 and 90`)
}   else {
    alert(`${Num} is not between 14 and 90`)
}
(Num >= 14 && Num <= 90)? 
alert(`${Num} is between 14 and 90`) : 
alert(`${Num} is not between 14 and 90`)
*/
/*let userName = prompt('Enter your username', '')
if(+userName==0){
    alert('Canceled')
}   else if(userName=='Davydx7'){
        password=prompt('Enter your password', '')
        if(+password==0){
            alert('Canceled')
        } else if(password=='@Davyd.jav'){
            alert(`Welcome ${userName}!`)
        } else{
            alert('incorrect password!')
        }
}   else{
    alert('Unknown User!')
}
*/
//NULLISH COALESCING OPERATOR (??) SAME AS OR (||) BUT ALSO RECOGNISISES 0 AS TRUE
//Dictionary Precedence: Number < small letters < capital letters all in strings
//you cant compare with different types until you convert
