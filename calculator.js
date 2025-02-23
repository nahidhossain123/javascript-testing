const {add, subtract, multiply,divide} = require('./mathUtils')
const calculate = (a,b, operation)=>{
    switch(operation){
        case 'add':
            return add(a,b)
        case 'subtract':
            return subtract(a,b)
        case 'multiply':
            return multiply(a,b)
        case 'divid':
            return divid(a,b)
        default:
            throw new Error('Invalid Operation')
    }
}

module.exports = calculate