/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, millis);
    });
}

// Test the function
const start = Date.now();

sleep(2000).then(() => {
    console.log("Hello World");
    console.log("Time:", Date.now() - start, "ms");
});