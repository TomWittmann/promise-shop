/**
 * ES2015 specs declare that promises must not fire their resolution/rejection function
 * on the same turn of the event loop that they are created on.
 * 
 * This is important because it eliminates the possibility of execution order varying and resulting
 * in intermediate outcomes.
 * 
 * You can expect that the functions passed to the then method of a promise will be called on the next
 * turn of the event loop.
 */

let promise = new Promise((resolve, reject) => {
    resolve("PROMISE VALUE");
}).then(console.log);

console.log("MAIN PROGRAM");