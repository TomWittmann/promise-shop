let promise = new Promise((fulfill, reject) => {
    setTimeout(() => {
        fulfill("FULFILLED!");
    }, 300);
}).then(data => {
    console.log(data);
}, err => {
    console.log(err);
});