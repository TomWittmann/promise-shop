/**
 * Fulfillment handlers may return promises or values.
 * Your Promises library will wrap your return value in a promise if
 * need be. 
 * 
 * This is good because it allows you to intermix values with promises
 * in a chain.
 * 
 * A good example of using this is you could check your cache synchronously and
 * return the found value or send an AJAX request to your remote server to fetch it.
 * 
 * Your handlers will wrap your return values in promises even if they are obtained
 * synchronously. However, the returned value will resolve on the next turn of the event loop.
 *  
 */


function attachTitle(name) {
    return 'DR. ' + name;
}

let fulfilledPromise = Promise.resolve('MANHATTAN');

fulfilledPromise.then(attachTitle).then(console.log);