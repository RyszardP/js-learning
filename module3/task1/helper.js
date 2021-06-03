const request = require('request');

const showCurrent = (isoNumber) => {
 
    let linkToRate = ` https://www.nbrb.by/api/exrates/rates/${isoNumber}?parammode=1`;
   
    request({ url: linkToRate, json: true }, (error, response) => {
        if (error) {
            console.log("Unable to connect");
        } else if (response.body.Cur_OfficialRate === undefined) {
            console.log("Unable to find link");
        } else {
            console.log("Курс валюты: "+ response.body.Cur_Scale + " " + response.body.Cur_Name
            + " " + response.body.Cur_OfficialRate);
        //    let result = (response.body.Cur_Scale + " " + response.body.Cur_Name
        //    + " " + response.body.Cur_OfficialRate);
        //    return result;

        }
    });
}

//console.log(showCurrent("298"));
//console.log(showCurrent("292"));
//console.log(showCurrent("145"));

module.exports = {
    showCurrent : showCurrent
}