class Helper {

    getPercentageOfDiscountFromPriceMessage(stringInArray) {
        const splitedString = stringInArray.split('');
        return splitedString.slice((splitedString.findIndex(el => el === '(')) + 1, splitedString.findIndex(el => el === '%')).join('');
    }

    getPriceFromArrayPrices(arrayPrice) {
        const splitedPrices = arrayPrice.split('');
        return splitedPrices.slice((splitedPrices.findIndex(el => el === "$")) + 1, 5).join('');
    }

    getPricesWithout$(arrayPrice) {
        const regex = /\$/gm;
        const subst = ``;
        return arrayPrice.map(str => str.replace(regex, subst));
    }

    checkAvailability(array, value) {
        return array.some(arrVal => value === arrVal);
    }
}

module.exports = new Helper();