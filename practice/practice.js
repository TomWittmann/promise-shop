function makePromise(arg = 1) {
    return new Promise((resolve, reject) => {
        resolve(arg);
    });
}


makePromise().then((data) => {
    data *= 2;
    return data;
}).then((data) => {
    data *= 2
    console.log(data);
});

