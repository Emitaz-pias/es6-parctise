// before  es6
function adder(num1,num2 ) {
    // or thus
    if(num2 ==undefined){
        return num2 = 0;
    }
num2 = num2||10;
    return num1+num2;
}
const adderCallerBefore = adder(2)
console.log(adderCallerBefore);



// in the es6 we can set up a default value like this way
function adderes6(num1,num2 = 10) {
    return num1+num2;
}
let adderCaller = adderes6(2)
console.log(adderCaller);