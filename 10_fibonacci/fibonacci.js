const fibonacci = function(fibLoc) {
    const index = Number(fibLoc); //convert to integer
    if (index < 0) {return "OOPS"}; //negative case
    let fibuArray = [1,1]; //initiate fibonacci array
    for (let i=2; i<index; i++) { //loop unti desired position
        num = fibuArray[i-1] + fibuArray[i-2]; //add previous 2 numbers
        fibuArray.push(num); //add to array
    }
    return fibuArray[index-1]; //return position in array
};

// Do not edit below this line
module.exports = fibonacci;
