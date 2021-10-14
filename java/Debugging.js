function pow(x, n) {
    let result = 1
    for (i = 0; i < n; i++) {
        result *= x
    }
    return result
}
let x = +prompt('x?', '')
let n = +prompt('n?', '')
debugger;
while (n < 0 || n === NaN ) {
    alert('Please enter a positive integer power index')
    n = +prompt('n?', '')
}
debugger;
alert( `${x} raised to the power of ${n} = ${pow(x, n)}` );