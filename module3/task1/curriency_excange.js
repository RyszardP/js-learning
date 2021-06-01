const request = require('request');

const url = "https://www.nbrb.by/api/exrates/rates/USD?parammode=2";

const showCurrent = async (url) => {
request({ url: url, json: true}, (error, response) => {
    if (error) {
        throw error;
    }
 
let officialRate = response.body.Cur_OfficialRate;
console.log(officialRate);
});
}
 
showCurrent(url);