/**
 * One of the new features in ECMAScript 2015 is a new type of object: promises.
 */

let error = new Error("REJECTED!");

let promise = new Promise((fulfill, reject) => {
    setTimeout(() => {
        reject(error);
    }, 300);
}).then(data => {
    console.log(data);
}, err => {
    console.log(err.message);
})



