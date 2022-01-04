const removeFromArray = function(array, ...args) {
    //return array;
    let toFilter = array;
    let newArray = toFilter.filter(Value => !args.includes(Value));
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
