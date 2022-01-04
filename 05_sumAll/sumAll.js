const sumAll = function(low, high) {
    let Sum=0;

    if (typeof(low)!='number' || typeof(high) != 'number') {
        return "ERROR";
    }

    if (low<0 || high<0) {
        return "ERROR";
    }
    if (low>high) {
        let temp = low;
        low = high;
        high = temp;
    }

    
    for (let i=low; i<=high; i++) {
        Sum = Sum + i;
    }
    return Sum;
};

// Do not edit below this line
module.exports = sumAll;
