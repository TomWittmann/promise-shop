let resolvedPromise = Promise.resolve('This will always be resolved!');

/**
 * Same as
 * 
 * let myPromise = new Promise((resolve, reject) => {
 *  resolve('This will always be resolved!');
 * });
 * 
 */

resolvedPromise.then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

let rejectedPromise = Promise.reject('This will always be rejected!');

/**
 * Same as
 * 
 * let myPromise = new Promise((resolve, reject) => {
 *  reject('This will always be rejected!');
 * });
 * 
 */

rejectedPromise.then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});