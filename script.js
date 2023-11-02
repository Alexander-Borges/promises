// Promise is simply an object and the idea of a promised object is that it contains the value of some asynchronous operation

// state -> pending, fulfilled, rejected (error)

const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 1000);
});

const promiseTwo = Promise.resolve(3) // returns a settled promise

console.log(promiseTwo);
//pending is the default state of promise

//setTimeout(() => console.log(promise), 1500);
promise.then(value => console.log(value), error => console.log("Oh No " + error)); // once promise is resolved then the value is resolved

//promise.then(console.log).catch(error=> console.log("Oh No ", + error));

promiseTwo
    .then(value => value *2)
    .then(value => value + 1)
    .then(console.log)
    .catch(error => console.log("Oh No " + error))
    .then(console.log)
    .finally(() => console.log("done"));// does not get value or error message as a parameter

const promArr = Promise.resolve(3)

    Promise.race([// works exactly as it sounds. First promise to settle will log out.
        Promise.resolve(3),
        Promise.resolve(2),// once one value is rejected the whole array is rejected
        new Promise((res, rej)=> setTimeout(() => res(5), 1000))
    ]).then(console.log);

    //.any - will wait for any of the promises to have a state of fulfilled and will return that value. 

console.log()
async function tester() {
    const value = await new Promise((res, rej) => setTimeout(()=> res(5),1000));
    console.log(value)
    // marks the function as asynchronous
    // this means that it implicitly returns the function with a promise
    return 4;

}
tester();