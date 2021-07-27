class Helper {

    getFromArrayPercentage(stringInArray) {
        const splitedString = stringInArray.split('');
        return splitedString.slice((splitedString.findIndex(el => el === "(")) + 1, splitedString.findIndex(el => el === "%")).join('');
    }

    isArraySortedByHighToLow(array) {
        for (let i = 0; i < array.length -1; i++) {
            if (array[i] >= array[i + 1]) {
                continue;
            } else {
               return false;
            }
        }
        return true;
    }

    isPricesUnder25$(array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] < 25) {
                return true;
            }
        }
    }

  
}

module.exports = new Helper();