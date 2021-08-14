let emptyBottle = 0;
let fullBottle = 0;
let drinkedBottles = 0;
function drinkBeer(D) {
    console.log("drink " + D + " bottles")
    fullBottle = D;
    emptyBottle = fullBottle;
    drinkedBottles += fullBottle;
    fullBottle = 0;
    return emptyBottle, fullBottle, drinkedBottles;
}

function changeBottles(C) {
    fullBottle = parseInt(emptyBottle / C);
    emptyBottle = emptyBottle % C;
    console.log("change bottle")
    return fullBottle, emptyBottle;
}

// const maxBeerBottles = (N, K) => {
//     while (N > 0) {
//         drinkBeer(N)
//         changeBottles(K)
//     }
//     return drinkedBottles;
// }

const maxBeerBottles = (N, K) => {
    let [result, empty, full] = [0, 0, N];

    while (full > 0) {
        result += full;
        empty += full;

        full = Math.floor(empty / K);
        empty = empty % K;
    }
    return result;
};

console.log(maxBeerBottles(15, 4)); // 19
