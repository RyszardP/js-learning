var isMomHappy = false;

const max = 10;
const mid = 5;
const min = 1

// let promise = new Promise((resolve, reject) => {

//     // через 1 секунду готов результат: result
//     setTimeout(() => resolve("result"), 1000);

//     // через 2 секунды — reject с ошибкой, он будет проигнорирован
//     setTimeout(() => reject(new Error("ignored")), 2000);;

// });

// // promise.then навешивает обработчики на успешный результат или ошибку
// promise
//     .then(
//         result => console.log("Fulfilled: " + result),
//         error => console.log("Rejected: " + error.message) // Rejected: время вышло!
//     );

let promiseFirst = new Promise((resolve, reject) => {
    if (max > min) {
        resolve("promiseFirst");
    } else {
        reject("no promiseFirst :( , false");
    }
});

let promiseSecond = new Promise((resolve, reject) => {
    if (max > min) {
        resolve("promiseSecond");
    } else {
        reject("no promiseSecond :( , false");
    }
});

let promiseThird = new Promise((resolve, reject) => {
    if (max < min) {
        resolve("promiseThird");
    } else {
        reject("no promiseThird :( , false");
    }
});

// let askValues = function () {
//     promiseFirst
//         .then(function (fulfilled) {
//             console.log(fulfilled);
//         })
//         .catch(function (error) {
//             console.log(error.message);
//         });
// };

// askValues();

// Promise.all([promiseFirst, promiseSecond, promiseThird]).then(value => {
//     console.log(value);
//   }, reason => {
//     console.log(reason)
//   });


//   Promise.allSettled([promiseFirst, promiseSecond, promiseThird]).then(value => {
//     console.log(value);
//   }, reason => {
//     console.log(reason)
//   });

// Promise.race([promiseFirst, promiseSecond, promiseThird]).then(value => {
//     console.log(value);
// }, reason => {
//     console.log(reason)
// });

// Promise.reject([promiseFirst, promiseSecond, promiseThird]).then(value => {
//     console.log(value);
// }, reason => {
//     console.log(reason)
// });

Promise.resolve([promiseFirst, promiseSecond, promiseThird]).then(value => {
    console.log(value);
}, reason => {
    console.log(reason)
});