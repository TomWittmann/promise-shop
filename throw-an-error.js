function parsedPromised(json) {
    return new Promise((resolve, reject) => {
        try {
            // Use JSON.parse() to convert text into a JavaScript object.
            // If the text is not written in JSON format you will get a syntax error.
            resolve(JSON.parse(json));
        } catch(err) {
            reject(err.message);
        }
    });
}

parsedPromised(process.argv[2]).then(console.log).catch(console.log);
