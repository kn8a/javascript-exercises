const palindromes = function (string) {
    let lower = string.toLowerCase(); //convert to lower case
    let numArray = []; //create new array
    for(let i = 0; i < lower.length; i++){ //loop over characters
        let value = lower.charCodeAt(i);
        if (value > 96 && value < 123){ //remove non letters
            numArray.push(value); //puash to new array
        }       
    }

    const orgStr = String.fromCharCode.apply(null, numArray); //array to string
    numArray.reverse(); //array reverse
    const reverseStr = String.fromCharCode.apply(null, numArray); //array to string
     
    if (orgStr == reverseStr) { //string comparison
        return true;
    }
    else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;


