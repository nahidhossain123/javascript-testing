//mocking
jest.mock('./mathUtils')

const calculate = require('./calculator')
const {add} = require('./mathUtils')

describe('calculate',()=>{
    test('calls add function with parameter',()=>{
        calculate(1,2,'add')
        expect(add).toHaveBeenCalled()
        expect(add).toHaveBeenCalledWith(1,2)
    })
})