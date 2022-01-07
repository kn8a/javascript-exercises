const findTheOldest = function(people) {
    let oldest = people.sort(function (a,b){ //sort oldest to youngest
        const firstPerson = getAge(a.yearOfDeath, a.yearOfBirth); //get age of person
        const nextPerson = getAge(b.yearOfDeath, b.yearOfBirth) //get age of person
    return nextPerson > firstPerson ? 1 : -1; //compare persons
    })
    return people[0];
};

//function to get age with default of current date if variable not available
function getAge(death = new Date().getFullYear(), birth) { 
    return death-birth;
}
// Do not edit below this line
module.exports = findTheOldest;
