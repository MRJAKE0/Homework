function helloName(name) {
    return `Hello '${name}'`
}
console.log(helloName('Alex'))
// 
const numbers = [5, 2, 20, 3, 15, 11, 8, 32, 10]
function checkArray(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            console.log(array[i])
        }
    }
}
console.log(checkArray(numbers))
//

function calculator(firstNumber, secondNumber, operator) {
    if(operator === 'plus'){
        return firstNumber + secondNumber
    } else if(operator === 'minus') {
        return firstNumber - secondNumber
    } else if(operator === 'multiply') {
        return firstNumber * secondNumber
    } else if(operator === 'devide') {
        return firstNumber / secondNumber
    }
}

console.log(calculator( 3, 2,'plus'))
console.log(calculator( 4, 5,'minus'))
console.log(calculator( 5, 3,'multiply'))
console.log(calculator( 15, 5,'devide'))