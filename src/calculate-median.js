function calculate_median(array) {
    var printNum = getPrintNum(array);

    return printNum;
}

function getPrintNum(array) {
    var printNum;
    var evenArray = [];

    for (var i = 1; i < array.length; i++) {
        if ((i+1) % 2 === 0  ) {
            evenArray.push(array[i]);
        }
    }
    if (evenArray.length % 2 === 0) {
        printNum = (evenArray[evenArray.length / 2 - 1] + evenArray[evenArray.length / 2]) / 2;

        return printNum;
    } else {
        printNum = evenArray[(evenArray.length + 1 ) / 2 - 1];

        return printNum;
    }
}

module.exports = calculate_median;