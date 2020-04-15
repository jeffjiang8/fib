// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
    const cache = {}
    // ...args means the number of arguments is unclear
    return function(...args) {
        if (cache[args]) {
            return cache[args]
        }

        const result = fn.apply(this, args)
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
        cache[args] = result

        return result
    }
}

function slowFib(n) {
    if ( n < 2 ){
        return n
    } else {
        return fib( n - 1 ) + fib( n - 2 )
        // fib => memoized function, not slow fib
    }
}

const fib = memoize(slowFib)
// function fib(n) {
//     // recursion
//     // if ( n < 2 ){
//     //     return n
//     // } else {
//     //     return fib( n - 1 ) + fib( n - 2 )
//     // }

//     // OR

//     // const result = [0, 1]

//     // for ( let i = 2; i <= n; i++ ) {
//     //     const a = result[result.length - 1]
//     //     const b = result[result.length - 2]

//     //     result.push(a + b)
//     // }

//     // return result[n]
//     // or return result[result.length - 1]
//     // linear runtime
// }

module.exports = fib;
``