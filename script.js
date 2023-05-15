// As a function declaration
function checkVals (num1, num2){
    if (num1 === num2) {
        console.log('Values are of the same type');
    } else if (num1 == num2){
        console.log('Values are the same');
    } else{
        console.log('Not the same value');
    }
}

checkVals(5,5);
checkVals(5,'5');
checkVals(5,'dog');

//As a function expression
const compareVals = function(valOne, valTwo){
    if (valOne === valTwo){
        console.log(`${valOne} is the same type as ${valTwo}`);
    } else if (valOne == valTwo){
        console.log(`${valOne} is not the same as ${valTwo}`);
    } else{
        console.log(`They are not the same values`)
    }
}

console.log();
compareVals('dog', 2);
compareVals('cat','cat');

//As a arrow function
const  diffVals =(x,y) => {
    x === y ? console.log('Same type') : 
    x == y ? console.log('same value') :
    console.log('Different values')
}

console.log();
diffVals(2,2);
diffVals(2,'2');
diffVals(2,true);